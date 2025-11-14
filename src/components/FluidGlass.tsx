/* eslint-disable react/no-unknown-property */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useRef, useState, useEffect, memo, Suspense } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useFBO,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text
} from '@react-three/drei';
import { easing } from 'maath';

// Create fallback geometries
const createFallbackGeometry = (type: string) => {
  if (type === 'Cylinder') {
    return new THREE.CylinderGeometry(1, 1, 0.5, 32);
  }
  return new THREE.BoxGeometry(1, 1, 1);
};

interface ModeWrapperProps {
  children?: React.ReactNode;
  glb: string;
  geometryKey: string;
  lockToBottom?: boolean;
  followPointer?: boolean;
  modeProps?: Record<string, any>;
  [key: string]: any;
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}: ModeWrapperProps) {
  const ref = useRef<THREE.Mesh>(null);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const geoWidthRef = useRef(1);
  // Initialize with fallback geometry immediately
  const [geometry, setGeometry] = useState<THREE.BufferGeometry>(() => {
    const fallback = createFallbackGeometry(geometryKey);
    fallback.computeBoundingBox();
    geoWidthRef.current = fallback.boundingBox!.max.x - fallback.boundingBox!.min.x || 1;
    return fallback;
  });

  // Try to load GLB model (geometry already initialized with fallback)
  useEffect(() => {
    let mounted = true;
    
    const loadModel = async () => {
      try {
        const loader = new GLTFLoader();
        loader.load(
          glb,
          (gltf) => {
            if (mounted) {
              const geo = (gltf.scene.getObjectByName(geometryKey) as THREE.Mesh)?.geometry;
              if (geo) {
                geo.computeBoundingBox();
                geoWidthRef.current = geo.boundingBox!.max.x - geo.boundingBox!.min.x || 1;
                setGeometry(geo);
              }
            }
          },
          undefined,
          () => {
            // On error, keep using fallback (already set)
            console.warn(`Failed to load ${glb}, using fallback geometry`);
          }
        );
      } catch (err) {
        // Keep using fallback (already set)
        console.warn(`Error loading model ${glb}, using fallback:`, err);
      }
    };

    // Try to load the actual model in background
    loadModel();

    return () => {
      mounted = false;
    };
  }, [glb, geometryKey]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0;

    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);
    
    if (modeProps.scale == null) {
      const maxWorld = v.width * 0.9;
      const desired = maxWorld / geoWidthRef.current;
      ref.current.scale.setScalar(Math.min(0.15, desired));
    }

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    gl.setClearColor(0x000000, 1);
  });

  const { scale, ior, thickness, anisotropy, chromaticAberration, ...extraMat } = modeProps;

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh ref={ref} scale={scale ?? 0.15} rotation-x={Math.PI / 2} geometry={geometry} {...props}>
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...extraMat}
        />
      </mesh>
    </>
  );
});

interface ComponentProps {
  modeProps?: Record<string, any>;
  [key: string]: any;
}

function Lens({ modeProps, ...p }: ComponentProps) {
  return <ModeWrapper glb="/assets/3d/lens.glb" geometryKey="Cylinder" followPointer modeProps={modeProps} {...p} />;
}

function Cube({ modeProps, ...p }: ComponentProps) {
  return <ModeWrapper glb="/assets/3d/cube.glb" geometryKey="Cube" followPointer modeProps={modeProps} {...p} />;
}

function Bar({ modeProps = {}, ...p }: ComponentProps) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25
  };

  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  );
}

function NavItems({ items }: { items: Array<{ label: string; link: string }> }) {
  const group = useRef<THREE.Group>(null);
  const { viewport, camera } = useThree();

  const DEVICE: Record<string, { max: number; spacing: number; fontSize: number }> = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.035 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.035 }
  };

  const getDevice = (): keyof typeof DEVICE => {
    const w = window.innerWidth;
    return w <= DEVICE.mobile.max ? 'mobile' : w <= DEVICE.tablet.max ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { spacing, fontSize } = DEVICE[device];

  useFrame(() => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1);
    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing;
    });
  });

  const handleNavigate = (link: string) => {
    if (!link) return;
    link.startsWith('#') ? (window.location.hash = link) : (window.location.href = link);
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          renderOrder={10}
          onClick={(e) => {
            e.stopPropagation();
            handleNavigate(link);
          }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}

function Images() {
  const group = useRef<THREE.Group>(null);
  const { height } = useThree((s) => s.viewport);

  // Use simple colored planes as content for the lens effect
  // This ensures the lens effect works without requiring image files
  return (
    <group ref={group}>
      <mesh position={[-2, 0, 0]} scale={[3, height / 1.1, 1]}>
        <planeGeometry />
        <meshBasicMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[2, 0, 3]} scale={3}>
        <planeGeometry />
        <meshBasicMaterial color="#2a2a2a" />
      </mesh>
      <mesh position={[-2.05, -height, 6]} scale={[1, 3, 1]}>
        <planeGeometry />
        <meshBasicMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-0.6, -height, 9]} scale={[1, 2, 1]}>
        <planeGeometry />
        <meshBasicMaterial color="#2a2a2a" />
      </mesh>
      <mesh position={[0.75, -height, 10.5]} scale={1.5}>
        <planeGeometry />
        <meshBasicMaterial color="#1a1a1a" />
      </mesh>
    </group>
  );
}

function Typography() {
  const DEVICE: Record<string, { fontSize: number }> = {
    mobile: { fontSize: 0.2 },
    tablet: { fontSize: 0.4 },
    desktop: { fontSize: 0.6 }
  };

  const getDevice = (): keyof typeof DEVICE => {
    const w = window.innerWidth;
    return w <= 639 ? 'mobile' : w <= 1023 ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { fontSize } = DEVICE[device];

  return (
    <Text
      position={[0, 0, 12]}
      fontSize={fontSize}
      letterSpacing={-0.05}
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      SELECTED WORK
    </Text>
  );
}

export default function FluidGlass({ mode = 'lens', lensProps = {}, barProps = {}, cubeProps = {} }: {
  mode?: 'lens' | 'bar' | 'cube';
  lensProps?: any;
  barProps?: any;
  cubeProps?: any;
}) {
  const Wrapper = mode === 'bar' ? Bar : mode === 'cube' ? Cube : Lens;
  const rawOverrides = mode === 'bar' ? barProps : mode === 'cube' ? cubeProps : lensProps;

  const {
    navItems = [
      { label: 'Home', link: '' },
      { label: 'About', link: '' },
      { label: 'Contact', link: '' }
    ],
    ...modeProps
  } = rawOverrides;

  return (
    <Suspense fallback={null}>
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 15 }} 
        gl={{ 
          alpha: true,
          antialias: true,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }}
      >
        <ScrollControls damping={0.2} pages={3} distance={0.4}>
          {mode === 'bar' && <NavItems items={navItems} />}
          <Wrapper modeProps={modeProps}>
            <Scroll>
              <Typography />
              <Suspense fallback={null}>
                <Images />
              </Suspense>
            </Scroll>
            <Scroll html />
            <Preload />
          </Wrapper>
        </ScrollControls>
      </Canvas>
    </Suspense>
  );
}
