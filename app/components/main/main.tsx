import { Spotlight } from "../ui/spotlight"
import AboutMe from "./about-me"
import Projects from "./projects"
import ContactMe from "./contact-me"

const Main = () => {
   return (
      <main className="min-w-72">
         <Spotlight fill="#00ffa7"/>
         <AboutMe />
         <Projects />
         <ContactMe />
      </main>      
   )   
}

export default Main