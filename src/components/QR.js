import React from 'react'
import QRCode from 'qrcode.react'

const QR = ({ url, image }) => (
  <QRCode
    value={url}
    style={{
      width: '100%',
      height: '100%',
    }}
    size={300}
    level="H"
    bgColor="transparent"
    imageSettings={
      image && {
        src: image,
        height: 100,
        width: 100,
        excavate: true,
      }
    }
  />
)

export default QR
