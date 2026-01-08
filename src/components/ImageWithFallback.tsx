import React, { useState } from 'react'

// 画像が見つからない場合に表示する代替画像のパス
const ERROR_IMG_SRC = '/images/icon/noimage.png'

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <img 
      src={ERROR_IMG_SRC} 
      alt={alt || "No image available"} 
      className={className} 
      style={style} 
      {...rest} 
      data-original-url={src} 
    />
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}