import { Suspense } from "react"
import InfoBlock from "./info-block"
import { ContactMeSkeleton } from "../ui/skeletons"

const ContactMe = () => {
   return (
      <section id="contact-me-section">
         <h2 className="mb-3 leading-none tracking-tight">Contact Me</h2>
         <p className="mb-6 font-normal text-white text-xl lg:text-2xl">Let&apos;s get in touch</p>
         <Suspense fallback={<ContactMeSkeleton />}>      
            <InfoBlock type="contact-me" />            
         </Suspense>
      </section>
   )
}

export default ContactMe 