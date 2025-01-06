"use client"
import Image from 'next/image'
import React from 'react'

export default function ImgComponent({src,alt,className,width=1000,height=1000}) {
  return (
    <Image src={src} className={className} alt={alt} width={width} height={height}/>
  )
}
