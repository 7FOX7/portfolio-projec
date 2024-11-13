import { Suspense } from "react"
import { SectionContentSkeleton } from "../ui/skeletons"
import FilterBox from "./filter-box"
import FilterLinks from "./filter-links"
import { projectsSections } from "@/app/lib/data"
import InfoBlock from "./info-block"

const Projects = () => {
   return (
      <section id="projects-section" className="px-5 mt-14">
         <h2 className="mb-3 leading-none tracking-tight">Projects</h2>
         <p className="mb-6 text-lg font-normal text-white lg:text-xl">What have we got here</p>
         <Suspense fallback={<SectionContentSkeleton />}>      
            <section>
               <div className="block md:hidden">
                  <FilterBox sections={projectsSections} />
               </div>           
               <div className="hidden md:block">
                  <FilterLinks sections={projectsSections} />
               </div>
               <InfoBlock type="projects" />
            </section>
         </Suspense>
      </section>
   )
}

export default Projects 