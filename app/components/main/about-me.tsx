'use server'

import { Suspense } from "react"
import FilterBox from "./filter-box"
import FilterLinks from "./filter-links"
import ImageContainer from "./image-container"
import { aboutMeSections } from "@/app/lib/data"
import { SectionContentSkeleton } from "../ui/skeletons"

const AboutMe = () => {
   
   return (
      <section className="px-5 mt-14">
         <h2 className="mb-3 text-4xl font-semibold leading-none tracking-tight text-primary-color md:text-5xl">About Me</h2>
         <p className="mb-6 text-lg font-normal text-white lg:text-xl">Let me introduce myself</p>
         <Suspense fallback={<SectionContentSkeleton />}>      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
               <ImageContainer mobileSrc="/author-mobile.webp" mobileWidth={310} mobileHeight={365} desktopSrc="/
               author-desktop.webp" desktopWidth={375} desktopHeight={465} alt="Author Image" /> 
               <div className="block md:hidden">
                  <FilterBox sections={aboutMeSections} />
               </div>           
               <div className="hidden md:block">
                  <FilterLinks sections={aboutMeSections} />
               </div>
            </div>
         </Suspense>
      </section>
   )
}

export default AboutMe 