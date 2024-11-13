'use client'

import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { Sections } from "@/app/lib/definitions"
import { _aboutMeSections } from "@/app/lib/data"
import { _projectsSections } from "@/app/lib/data"

const FilterLinks = ({sections}: {sections: Sections}) => {
   const searchParams = useSearchParams()
   const router = useRouter()
   const pathname = usePathname()

   function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      const params = new URLSearchParams(searchParams)
      const aboutMeParams = params.get('about-me')
      const projectsParams = params.get('projects')

      if(aboutMeParams && projectsParams) {
         if(_aboutMeSections.includes(e.currentTarget.value)) {
            params.set('about-me', e.currentTarget.value)
            params.set('projects', projectsParams)   
         }
         else if(_projectsSections.includes(e.currentTarget.value)) {
            params.set('projects', e.currentTarget.value)
            params.set('about-me', aboutMeParams)
         }
   
         router.replace(`${pathname}?${params}`, {scroll: false})
      }
   }
   return (
      <div className="flex items-center">
         {sections.map((section) => {
            return <button key={section.id} value={section.value} onClick={handleClick}>{section.name}</button>
         })}
      </div>
   )
}

export default FilterLinks