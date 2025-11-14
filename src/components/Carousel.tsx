import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { FiCircle, FiFileText, FiLayers, FiCpu, FiTrendingUp, FiTarget, FiZap } from 'react-icons/fi';
import './Carousel.css';

const DEFAULT_ITEMS = [
  // Completed Blog Posts
  {
    title: 'Why I Built Neuralyn',
    description: 'The Journey from Immigrant Student to AI Founder',
    id: 1,
    slug: 'why-i-built-neuralyn',
    icon: <FiTarget className="carousel-icon" />
  },
  {
    title: 'Building as an Immigrant',
    description: 'The Realities of Building and Fundraising in the US Startup Scene',
    id: 2,
    slug: 'building-as-an-immigrant',
    icon: <FiCircle className="carousel-icon" />
  },
  {
    title: 'Engineering HealMind_AI',
    description: 'Building Voice-First, Multilingual, Emotion-Aware AI',
    id: 3,
    slug: 'engineering-healmind-ai',
    icon: <FiCpu className="carousel-icon" />
  },
  {
    title: 'Self-Healing AI Agents',
    description: 'What Are Self-Healing AI Agents — Why They Matter Now',
    id: 4,
    slug: 'self-healing-ai-agents',
    icon: <FiZap className="carousel-icon" />
  },
  // To Be Done
  {
    title: 'Lessons from Launching a Mental Wellness AI for 2.6 Billion People',
    description: 'Mental Wellness AI for 2.6 Billion People',
    id: 5,
    slug: 'lessons-from-launching',
    icon: <FiTrendingUp className="carousel-icon" />
  },
  {
    title: 'Architecting Scalable AI Systems as an Early-Stage Startup',
    description: 'Scalable AI Systems as an Early-Stage Startup',
    id: 6,
    icon: <FiLayers className="carousel-icon" />
  },
  {
    title: 'Data Privacy & Compliance in AI-Powered Health Apps',
    description: 'HIPAA, GDPR in AI-Powered Health Apps',
    id: 7,
    icon: <FiTarget className="carousel-icon" />
  },
  {
    title: 'Overcoming Language Barriers: NLP for Multilingual Mental Wellness',
    description: 'NLP for Multilingual Mental Wellness',
    id: 8,
    icon: <FiFileText className="carousel-icon" />
  },
  {
    title: 'My Transition from Academic AI Research to Startup CTO',
    description: 'My Transition from Academic AI Research to Startup CTO',
    id: 9,
    icon: <FiTrendingUp className="carousel-icon" />
  },
  {
    title: 'The Power of Voice: Why Cultural Intelligence Is Critical in AI',
    description: 'Why Cultural Intelligence Is Critical in AI',
    id: 10,
    icon: <FiCircle className="carousel-icon" />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}: {
  items?: typeof DEFAULT_ITEMS;
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}) {
  const navigate = useNavigate();
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;
  
  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (_: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
    // Reset dragging state after a short delay
    setTimeout(() => setIsDragging(false), 100);
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
      };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? 'round' : ''}`}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px`, borderRadius: '50%' })
      }}
    >
      <motion.div
        className="carousel-track"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
          const outputRange = [90, 0, -90];
          const rotateY = useTransform(x, range, outputRange, { clamp: false });

          const handleClick = (e: React.MouseEvent) => {
            // Only navigate if not dragging
            if (!isDragging && item.slug) {
              e.stopPropagation();
              navigate(`/blog/${item.slug}`);
            }
          };

          return (
            <motion.div
              key={index}
              className={`carousel-item ${round ? 'round' : ''}`}
              style={{
                width: itemWidth,
                height: round ? itemWidth : '100%',
                rotateY: rotateY,
                ...(round && { borderRadius: '50%' }),
                cursor: item.slug ? 'pointer' : 'default'
              }}
              transition={effectiveTransition}
              onClick={handleClick}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`carousel-item-header ${round ? 'round' : ''}`}>
                <span className="carousel-icon-container">{item.icon}</span>
              </div>
              <div className="carousel-item-content">
                <div className="carousel-item-title">{item.title}</div>
                <p className="carousel-item-description">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

