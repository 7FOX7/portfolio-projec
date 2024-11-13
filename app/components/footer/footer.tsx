import { sections } from "@/app/lib/data"
import Image from "next/image"
import Link from "next/link"
import SocialIconLink from "../main/social-icon-link"

export default function Footer() {
   return (
      <footer className="bg-white dark:bg-gray-900">
         <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
               <div className="mb-6 md:mb-0">
                  <Link href="/" className="flex items-center">
                     <Image 
                        width={32}
                        height={40}
                        src="/fox-logo.webp" className="h-8" alt="7FOX7 Logo" 
                     />
                  </Link>
               </div>
               <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  {sections.map((section) => (
                     <div key={section.id}>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{section.name}</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                           {section?.subLinks?.map((subLink) => (
                                 <li key={subLink.id} className="mb-4">
                                    <Link href={`${subLink.path}`} className="hover:underline">{subLink.name}</Link>
                                 </li>
                              )
                           )}
                        </ul>
                     </div>
                  ))}     
               </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
               <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="https://github.com/7FOX7" className="hover:underline">7FOX7</Link>. All Rights Reserved.
               </span>
               <div className="flex mt-4 sm:justify-center sm:mt-0">
                  <SocialIconLink
                     url="https://github.com"
                     href="https://github.com/7FOX7"
                     label="GitHub account"
                  />
                  <SocialIconLink
                     url="https://linkedin.com"
                     href="https://www.linkedin.com/in/evgenii-khe-38934a318/"
                     label="LinkedIn account"
                  />
                  <SocialIconLink
                     url="email"
                     href="mailto:kheeugene@gmail.com"
                     label="Personal email"
                  />
               </div>
            </div>
         </div>
      </footer>
   )
}