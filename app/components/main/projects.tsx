import { Suspense } from "react"
import { SectionContentSkeleton } from "../ui/skeletons"
import FilterBox from "./filter-box"
import FilterLinks from "./filter-links"
import { projectsSections } from "@/app/lib/data"
import InfoBlock from "./info-block"

const Projects = () => {
   return (
      <section id="projects-section">
         <h2 className="mb-3 leading-none tracking-tight">Projects</h2>
         <p className="mb-6 font-normal text-white text-xl lg:text-2xl">What we've got here</p>
         <Suspense fallback={<SectionContentSkeleton />}>      
            <section>
               <div className="block md:hidden w-2/5 mt-8">
                  <div className="w-4/4 min-w-44 max-w-44 mb-5">
                     <FilterBox sections={projectsSections} />
                  </div>
               </div>           
               <div className="hidden md:block max-w-56 mb-2">
                  <FilterLinks sections={projectsSections} />
               </div>
               <InfoBlock type="projects" />
            </section>
         </Suspense>
      </section>
   )
}

export default Projects 