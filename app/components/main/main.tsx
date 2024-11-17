import { Spotlight } from "../ui/spotlight"
import AboutMe from "./about-me"
import Projects from "./projects"
import ContactMe from "./contact-me"

const Main = () => {
   return (
      <main className="w-full">
         <Spotlight fill="#00ffa7"/>
         <br />
         <AboutMe />
         <br />
         <Projects />
         <br />
         <ContactMe />
      </main>      
   )   
}

export default Main