"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import Link from "next/link"
import { HoverLinkProps } from "@/app/lib/definitions"
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
      <div className="text-primary-color text-2xl font-semibold w-fit">
         <Link href={textLink.href} aria-label={textLink.label} onMouseEnter={handleHover} onTouchStart={handleHover} onTouchMove={handleHover} target="_blank">{textLink.text}</Link>    
         <div ref={underlineRef} className="h-[3px] bg-primary-color w-full" aria-hidden={true} />     
      </div>
   )
}

export default HoverLink