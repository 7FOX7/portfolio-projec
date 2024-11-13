import { educationContent } from "@/app/lib/data"
import { generalContent } from "@/app/lib/data"
import { skillsContent } from "@/app/lib/data"
import Image from "next/image"
// import { sections } from "@/app/lib/data"

const ContentStorage = new Map() 

ContentStorage.set("education", () => {
   return (
      educationContent.map((education, index, arr) => (
         <div key={education.id} className={index !== arr.length - 1 ? `mb-5 md:mb-8`: ""}>
            <h3>{education.title}</h3>
            <p>{education.description}</p>
         </div>
      ))
   )
})

ContentStorage.set("general", () => {
   return <p>{generalContent}</p>
})

ContentStorage.set("skills", () => {
   return (
      <div className="grid grid-cols-2 gap-y-4 md:grid-cols-3 justify-center items-center">
         {skillsContent.map((skill) => (
         <div className="flex flex-col justify-center items-center" key={skill.id}>
            <Image
               src={skill.src}
               width={skill.mobileWidth}
               height={skill.mobileHeight}
               alt={skill.alt}
            />
            <p className="font-medium text-xl">{skill.text}</p>
         </div>
         ))}
      </div>
      
   )
})

ContentStorage.set("big-projects", () => {
   return (
      <div>
         <p>Hello from big projects</p>
      </div>
   )
})

ContentStorage.set("demos", () => {
   return (
      <div>
         <p>Hello from demos</p>
      </div>
   )
})

ContentStorage.set("contact-me", () => {
   return (
      <div>
         <p>Hello from contact me</p>
      </div>
   )
})

export default ContentStorage