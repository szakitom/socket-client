export const hexToRGB = (h, opacity) => {
  let r = 0
  let g = 0
  let b = 0

  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`
    g = `0x${h[2]}${h[2]}`
    b = `0x${h[3]}${h[3]}`
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`
    g = `0x${h[3]}${h[4]}`
    b = `0x${h[5]}${h[6]}`
  }

  return {
    r: +r,
    g: +g,
    b: +b,
    alpha: opacity,
  }
}

export const RGBToHex = (_r, _g, _b) => {
  let r = _r.toString(16)
  let g = _g.toString(16)
  let b = _b.toString(16)
  if (r.length === 1) {
    r = `0${r}`
  }
  if (g.length === 1) {
    g = `0${g}`
  }
  if (b.length === 1) {
    b = `0${b}`
  }

  return `#${r}${g}${b}`
}

export const colorConverter = (color) => {
  const a = Uint8Array.from(color)
  const ua = new Uint8ClampedArray(a, 1, 1)
  return new ImageData(ua, 1, 1)
}

export const redraw = ({ ctx, db, width, height }) => {
  const buf8 = new Uint8Array(db.flat())
  const ua = new Uint8ClampedArray(buf8, width, height)
  const imageData = new ImageData(ua, width, height)
  ctx.putImageData(imageData, 0, 0)
}
export const isBrowser = () => typeof window !== 'undefined'
