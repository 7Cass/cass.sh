import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: number | null
    y: number | null
  }>({
    x: null,
    y: null,
  })
  const [scrollPosition, setScrollPosition] = useState<{
    x: number | null
    y: number | null
  }>({
    x: null,
    y: null,
  })

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX + window.scrollX,
      y: e.clientY + window.scrollY,
    })
  }

  const updateScrollPosition = (e: any) => {
    setScrollPosition({ x: window.scrollX, y: window.scrollY })
  }

  useEffect(() => {
    window.addEventListener('scroll', updateScrollPosition)
    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.addEventListener('scroll', updateScrollPosition)
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition)
  }, [scrollPosition])

  return mousePosition
}

export default useMousePosition
