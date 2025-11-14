import { useEffect, useState } from 'react'

interface TypewriterProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

export const Typewriter = ({ text, speed = 30, className = '', onComplete }: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length && onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete])

  return (
    <span className={className}>
      {displayedText}
      <span className="cursor">|</span>
    </span>
  )
}

