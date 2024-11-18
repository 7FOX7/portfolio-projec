import { sections } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
   return (
      <footer>
         <div className="bg-transparent mt-52 w-full min-w-56 p-4 md:p-6 lg:p-8 justify-self-center text-primary-color ">
            <div className="md:flex md:justify-between">
               <div className="mb-6 md:mb-0">
                  <Link href="/" className="flex items-center">
                     <Image 
                        width={60}
                        height={60}
                        src="/fox-logo.webp" alt="7FOX7 Logo" 
                     />
                  </Link>
               </div>
               <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 ">
                  {sections.map((section) => (
                     <div key={section.id}>
                        <h2 className="mb-6 text-sm font-semibold uppercase">{section.name}</h2>
                        <ul className="text-gray-400 font-medium">
                           {section?.subLinks?.map((subLink) => (
                                 <li key={subLink.id} className="mb-4">
                                    <Link href={`/${subLink.path}`} className="hover:underline">{subLink.name}</Link>
                                 </li>
                              )
                           )}
                        </ul>
                     </div>
                  ))}     
               </div>
            </div>
            <hr className="my-6" />
            <div>
               <span className="text-sm text-gray-400">© 2024 <Link href="https://github.com/7FOX7" target="_blank" className="hover:underline text-primary-color">7FOX7</Link>. All Rights Reserved.
               </span>
            </div>
         </div>
      </footer>
   )
}