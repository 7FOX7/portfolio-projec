import { Suspense } from "react"
import FilterBox from "./filter-box"
import FilterLinks from "./filter-links"
import ImageContainer from "./image-container"
import { aboutMeSections } from "@/app/lib/data"
import { AboutMeSkeleton } from "../ui/skeletons"
import InfoBlock from "./info-block"

const AboutMe = () => {
   return (
      <section id="about-me-section">
         <h2 className="mb-3 leading-none tracking-tight">About Me</h2>
         <p className="mb-6 font-normal text-white text-xl lg:text-2xl">Let me introduce myself</p>
         <div aria-hidden={true} className="hidden lg:block mb-8" />
         <Suspense fallback={<AboutMeSkeleton />}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 md:gap-x-10 min-w-72 h-full ">
               <div className="flex justify-center md:justify-start md:col-span-7 lg:col-span-6 mb-12 md:mb-0 h-fit">
                  <ImageContainer id="authorImage" src="/author.webp" mobileWidth={310} mobileHeight={413} desktopWidth={385} desktopHeight={513} alt="Author" />     
               </div>
               <div className="md:col-span-5 lg:col-span-6">
                  <div className="block md:hidden w-2/5 mt-8">
                     <div className="w-4/4 min-w-40 max-w-40 mb-5">
                        <FilterBox sections={aboutMeSections} />
                     </div>  
                  </div>         
                  <div className="hidden md:block max-w-80 mb-2">
                     <FilterLinks sections={aboutMeSections} />
                  </div>
                  <InfoBlock type="about-me" />
               </div>
            </div>
         </Suspense>
      </section>
   )
}

export default AboutMe 