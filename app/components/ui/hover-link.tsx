"use client"

import { useRef } from "react"
import Link from "next/link"
import { HoverLinkProps } from "@/app/lib/definitions"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const HoverLink = ({textLink}: HoverLinkProps) => {
   const underlineRef = useRef(null)
   const {contextSafe} = useGSAP({}, {dependencies: []})

   const handleHover = contextSafe(() => {
      gsap.fromTo(underlineRef.current, 
         {
            width: 0
         }, 
         {
            width: "100%"
         }
      )
      .duration(0.5)
   })

   return (
      <div className="text-primary-color text-2xl md:text-4xl font-semibold w-fit">
         <Link href={textLink.href} onMouseEnter={handleHover} onTouchStart={handleHover} onTouchMove={handleHover}>{textLink.text}</Link>    
         <div ref={underlineRef} className="h-1 bg-primary-color w-full" />     
      </div>
   )
}

export default HoverLink