'use client'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import NextImage, { ImageProps } from 'next/image'
import { useEffect, useState } from 'react'

export interface IImageProps extends ImageProps {
  fallbackImage?: string
}

const fallbackImg = '/fallbackImage.gif'

const ImageFallback = ({
  src,
  fallbackImage = fallbackImg,
  style = {},
  draggable = false,
  ...rest
}: IImageProps) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImport>(src)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setImgSrc(src)
  }, [src])

  const handleError = () => {
    if (!isError) {
      setImgSrc(fallbackImage)
      setIsError(true)
    }
  }

  return (
    <NextImage
      src={imgSrc || fallbackImage}
      {...rest}
      placeholder='blur'
      blurDataURL={fallbackImg}
      onError={handleError}
      style={{
        ...style,
        objectFit: isError || !imgSrc ? 'cover' : style.objectFit,
      }}
      draggable={draggable}
    />
  )
}

export default ImageFallback
