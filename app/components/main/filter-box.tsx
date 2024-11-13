'use client'

import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"  
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Sections } from "@/app/lib/definitions"
import { _aboutMeSections } from "@/app/lib/data"
import { _projectsSections } from "@/app/lib/data"

const FilterBox = ({sections}: {sections: Sections}) => {
   const searchParams = useSearchParams()
   const pathname = usePathname()
   const router = useRouter()

   useEffect(() => {
      router.replace('/?about-me=education&projects=big-projects')   // navigate to the default path
   }, [])

   function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
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
      <select aria-label="filter-box" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={sections[0].value} onChange={handleChange}>
         {sections.map((section) => {
            return <option key={section.id} value={section.value}>{section.name}</option>
         })}
      </select>
   )
}

export default FilterBox