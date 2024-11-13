import { Suspense } from "react"
import { SectionContentSkeleton } from "../ui/skeletons"
import InfoBlock from "./info-block"

const ContactMe = () => {
   return (
      <section id="contact-me-section" className="px-5 mt-14">
         <h2 className="mb-3 leading-none tracking-tight">Contact Me</h2>
         <p className="mb-6 text-lg font-normal text-white lg:text-xl">Let&apos;s get in touch</p>
         <Suspense fallback={<SectionContentSkeleton />}>      
            <InfoBlock type="contact-me" />            
         </Suspense>
      </section>
   )
}

export default ContactMe 