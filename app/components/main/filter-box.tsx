'use client'

import { useSearchParams } from "next/navigation"
import { usePathname } from "next/navigation"  
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Sections } from "@/app/lib/definitions"
import { _aboutMeSections } from "@/app/lib/data"
import { _projectsSections } from "@/app/lib/data"

const FilterBox = ({sections}: {sections: Sections}) => {
   console.log('filter box is recreated')
   const searchParams = useSearchParams()
   const pathname = usePathname()
   const router = useRouter()

   useEffect(() => {
      console.log('useEffect is executed')
      router.replace('/?about-me=education&projects=big-projects')   // navigate to the default path
   }, [router])

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

/*
   does it make sense to use 'useCallback' within a component whose parent is rerendering? Assume we have the code as follows: 


   <Home>
      <Sales />
   </Home>

   const Sales = () => {
      ....
      const router = useRouter()
      const myFunc = useCallback(() => {
         router.replace('/another/router')
      }, [])

      return (
         // some content here
      )
   }

   const Home = () => {
      console.log('rerendered')     // will be logged each time we change the route
   }


   now, is the 'myFunc' will be rerendered? I think that yes, it will be rerendered, simply because we recreate the entire component tree, the parent is recreated, and the child component is recreated, too, unless you wrap 
   your 'Sales' into 'memo' (but even this is not going to work since by changing the router, all the components are rerendered). The virtual DOM is recreated, and a new DOM is created every time
*/