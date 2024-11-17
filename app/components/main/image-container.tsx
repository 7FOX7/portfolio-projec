import Image from "next/image"
import { ImageProps } from "@/app/lib/definitions"

const ImageContainer = ({
   id,
   src, 
   alt, 
   mobileWidth, 
   mobileHeight, 
   desktopWidth, 
   desktopHeight, 
}: ImageProps) => {
   return (
      <figure className={`relative w-fit h-fit`}>
         <div className="absolute bg-primary-color opacity-40 w-full h-full z-30"/>
         <Image 
            id={id}
            src={src}
            alt={alt}
            width={mobileWidth}
            height={mobileHeight}
            draggable="false"
            className="relative block md:hidden z-20"
         />
         <Image 
            src={src}
            alt={alt}
            width={desktopWidth}
            height={desktopHeight}
            draggable="false"
            className="relative hidden md:block z-20"
         />
         <div className={`absolute left-7 top-6 w-full h-full border-4 border-primary-color z-10`} />
      </figure>
   )
}

export default ImageContainer