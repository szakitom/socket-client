import { useState, useEffect } from 'react'

import { isBrowser } from '../utils/index'

export default function useWindowSize() {
  const [size, setSize] = useState([
    isBrowser() && window.innerWidth,
    isBrowser() && window.innerHeight,
  ])
  const updateSize = () => {
    setSize([
      isBrowser() && window.innerWidth,
      isBrowser() && window.innerHeight,
    ])
  }
  useEffect(() => {
    if (isBrowser()) {
      window.addEventListener('resize', updateSize)
    }

    return () => isBrowser() && window.removeEventListener('resize', updateSize)
  })

  return size
}
