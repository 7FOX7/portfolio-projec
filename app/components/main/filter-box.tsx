'use client'

import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"  
import { useRouter } from "next/navigation"
import { Sections } from "@/app/lib/definitions"
import { _aboutMeSections } from "@/app/lib/data"
import { _projectsSections } from "@/app/lib/data"

const FilterBox = ({sections}: {sections: Sections}) => {
   const searchParams = useSearchParams()
   const pathname = usePathname()
   const router = useRouter()

   const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const params = new URLSearchParams(searchParams)
      const aboutMeParams = params.get('about-me')
      const projectsParams = params.get('projects')

      if(aboutMeParams && projectsParams) {
         if(_aboutMeSections.includes(e.target.value)) {
            params.set('about-me', e.target.value)
            params.set('projects', projectsParams)   
         }
         else if(_projectsSections.includes(e.target.value)) {
            params.set('projects', e.target.value)
            params.set('about-me', aboutMeParams)
         }
   
         router.replace(`${pathname}?${params}`, {scroll: false})
      }
   }

   return (
      <select aria-label="filter box" className="bg-transparent py-2 px-4 outline-none border-none focus:ring-2 focus:ring-primary-color font-semibold text-primary-color text-xl w-full cursor-pointer" defaultValue={sections[0].value} onChange={handleChange}>
         {sections.map((section) => {
            return <option key={section.id} value={section.value} className="text-black">{section.name}</option>
         })}
      </select>
   )
}

export default FilterBox