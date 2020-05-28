import { useState, useEffect } from 'react'

export default function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])
  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight])
  }
  useEffect(() => {
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  })

  return size
}
