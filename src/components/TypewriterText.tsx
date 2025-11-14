import { useTypewriter } from '../hooks/useTypewriter'

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'div'
}

export const TypewriterText = ({ 
  text, 
  speed = 20, 
  delay = 0, 
  className = '',
  as: Component = 'span'
}: TypewriterTextProps) => {
  const { displayedText, isComplete } = useTypewriter(text, speed, delay)

  return (
    <Component className={`typewriter-text ${isComplete ? 'typing-complete' : ''} ${className}`}>
      {displayedText}
      {!isComplete && <span className="cursor">|</span>}
    </Component>
  )
}

