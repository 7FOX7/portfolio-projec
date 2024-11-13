'use server'

import { Suspense } from "react"
import FilterBox from "./filter-box"
import FilterLinks from "./filter-links"
import ImageContainer from "./image-container"
import { aboutMeSections } from "@/app/lib/data"
import { SectionContentSkeleton } from "../ui/skeletons"
import InfoBlock from "./info-block"

const AboutMe = () => {
   return (
      <section id="about-me-section" className="px-5 mt-14">
         <h2 className="mb-3 leading-none tracking-tight">About Me</h2>
         <p className="mb-6 text-lg font-normal text-white lg:text-xl">Let me introduce myself</p>
         <Suspense fallback={<SectionContentSkeleton />}>      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
               <ImageContainer src="/author.webp" mobileWidth={310} mobileHeight={413} desktopWidth={385} desktopHeight={513} alt="Author" /> 
               <section>
                  <div className="block md:hidden">
                     <FilterBox sections={aboutMeSections} />
                  </div>           
                  <div className="hidden md:block">
                     <FilterLinks sections={aboutMeSections} />
                  </div>
                  <InfoBlock type="about-me" />
               </section>
            </div>
         </Suspense>
      </section>
   )
}

export default AboutMe 