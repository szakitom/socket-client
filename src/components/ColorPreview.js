import styled from 'styled-components'

const ColorPreview = styled.div.attrs(({ opacity, color }) => ({
  style: {
    opacity: `${opacity / 255}`,
    background: `${color}`,
  },
}))`
  width: 100%;
  height: 100%;
`

export default ColorPreview
