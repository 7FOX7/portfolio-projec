"use client"

import { AccordionProps } from "@/app/lib/definitions"
import { Fragment } from "react"
import { useState } from "react"

function Accordion({wrapperKey, values}: AccordionProps<React.ReactNode>) { // type will be determined on the fly (based on what type the 'values' will have)
   const [isVisible, setIsVisible] = useState(false); 
   return (
      <div key={wrapperKey} data-accordion="collapse" className="text-primary-color">
         {values.map((value, index) => (
            <Fragment key={value.key}>
               <h4 id={`accordion-open-heading-${index}`}>
                  <button type="button" className="flex items-center justify-between w-full p-5 border-2 border-gray-200 rounded-t-xl hover:bg-gray-600" data-accordion-target={`accordion-open-body-${index}`} aria-expanded={isVisible} aria-controls={`accordion-open-body-${index}`} onClick={() => setIsVisible((prev) => !prev)}>
                     <span>{value.heading}</span>
                     <svg data-accordion-icon className={`w-3 h-3 ${isVisible ? "rotate-0" : "rotate-180"} shrink-0`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                     </svg>
                  </button>
               </h4>
               <div key={`accordion-open-body-${index}`} id={`accordion-open-body-${index}`} aria-labelledby={`accordion-open-heading-${index}`} className={`${isVisible ? "block" : "hidden"} text-white mx-1 p-5 border-2 border-t-0 border-primary-color`}>
                  {value.content}
               </div>
            </Fragment>
         ))}         
      </div>
   )
}

export default Accordion