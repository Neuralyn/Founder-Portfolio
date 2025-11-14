import { useState, useEffect } from 'react'

export const useTypewriter = (text: string, speed: number = 30, delay: number = 0) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  // Reset when text changes
  useEffect(() => {
    setDisplayedText('')
    setCurrentIndex(0)
    setIsComplete(false)
    setHasStarted(false)
  }, [text])

  // Handle delay
  useEffect(() => {
    if (delay > 0 && !hasStarted) {
      const delayTimer = setTimeout(() => {
        setHasStarted(true)
        setCurrentIndex(0)
      }, delay)
      return () => clearTimeout(delayTimer)
    } else if (delay === 0 && !hasStarted) {
      setHasStarted(true)
      setCurrentIndex(0)
    }
  }, [delay, hasStarted])

  // Typewriter effect
  useEffect(() => {
    if (!hasStarted) return
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1))
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else if (currentIndex === text.length && !isComplete) {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed, isComplete, hasStarted])

  return { displayedText, isComplete }
}

