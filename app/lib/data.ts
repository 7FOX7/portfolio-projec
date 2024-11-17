import { Sections } from "./definitions";
import { SectionLinks } from "./definitions";
import { ContactMeContent } from "./definitions";
import { EducationContent } from "./definitions";
import { SkillsContent } from "./definitions";
import { ProjectsContent } from "./definitions";

const tech = {
   html: "HMTL/CSS", 
   js: "JavaScript", 
   ts: "TypeScript", 
   mui: "Material UI", 
   react: "ReactJS", 
   next: "NextJS", 
   twd: "Tailwind CSS",
   node: "NodeJS",  
   gsap: "GSAP", 
   ex: "ExpressJS", 
   msql: "MySQL", 
   psql: "PostgreSQL", 
   axi: "axios", 
   btrap: "Bootstrap"
}

export const sections: SectionLinks = [
   {
     id: 'about-me', 
     name: 'About Me', 
     path: '#about-me-section', 
     subLinks: [
      {
         id: 'about-me-education', 
         name: 'Education', 
         path: '#about-me-section',
         value: 'education'
      },
      {
         id: 'about-me-general', 
         name: 'General', 
         path: '#about-me-section',
         value: 'general'
      }, 
      {
         id: 'about-me-skills', 
         name: 'Skills', 
         path: '#about-me-section',
         value: 'skills'
      },  
     ]
   }, 
   {
     id: 'projects', 
     name: 'Projects', 
     path: '#projects-section', 
     subLinks: [
      {
         id: 'projects-big-projects', 
         name: 'Big projects', 
         path: '#projects-section',
         value: 'big-projects'
      }, 
      {
         id: 'projects-demos', 
         name: 'Demos', 
         path: '#projects-section',
         value: 'demos'
      }, 
     ]
   }, 
   {
     id: 'contact-me',
     name: 'Contact Me', 
     path: '#contact-me-section',
     subLinks: [
      {
         id: 'contact-me-medias', 
         name: 'Medias', 
         path: '#contact-me-section', 
         value: 'medias'
      }
     ]
   }
]

export const aboutMeSections: Sections = [
   {
      id: "about-me-education", 
      name: "Education", 
      value: "education"
   }, 
   {
      id: "about-me-general", 
      name: "General", 
      value: "general"
   }, 
   {
      id: "about-me-skills", 
      name: "Skills", 
      value: "skills"
   }, 
]

export const projectsSections: Sections = [
   {
      id: "projects-big-projects", 
      name: "Big Projects", 
      value: "big-projects"
   }, 
   {
      id: "projects-demos", 
      name: "Demos", 
      value: "demos"
   }
]

export const _aboutMeSections: string[] = ["education", "general", "skills"]
export const _projectsSections: string[] = ["big-projects", "demos"]


export const educationContent: EducationContent = [
   {
      id: "education-institution", 
      title: "Institution:", 
      description: "Niagara College"
   }, 
   {
      id: "education-degree", 
      title: "Degree:", 
      description: "Advanced Diploma"
   }, 
   {
      id: "education-program", 
      title: "Program:", 
      description: "Computer Programming and Analysis"
   },
   {
      id: "education-start-date", 
      title: "Start Date:", 
      description: "3 September of 2024"
   },
   {
      id: "education-end-date", 
      title: "End Date:", 
      description: "18 December of 2026"
   }
]

export const generalContent: string = "Hi, Dear Reader! I'm Evgenii Khe, a 19-year-old web development enthusiast. I've been diving into both frontend and backend parts for two years now, and I've learned a lot during this time. I hope you enjoy exploring my portfolio, and I look forward to connecting with you soon!"

export const skillsContent: SkillsContent[] = [
   {
      id: "skills-typescript", 
      text: "TypeScript", 
      src: "/typescript-icon.svg",
      mobileWidth: 90, 
      mobileHeight: 90, 
      desktopWidth: 90, 
      desktopHeight: 90, 
      alt: "TypeScript icon" 
   }, 
   {
      id: "skills-reactjs", 
      text: "ReactJS", 
      src: "/reactjs-icon.svg",
      mobileWidth: 90, 
      mobileHeight: 90, 
      desktopWidth: 90, 
      desktopHeight: 90, 
      alt: "ReactJS icon"
   }, 
   {
      id: "skills-javascript", 
      text: "JavaScript", 
      src: "/javascript-icon.svg",
      mobileWidth: 90, 
      mobileHeight: 90, 
      desktopWidth: 90, 
      desktopHeight: 90, 
      alt: "JavaScript icon"
   }, 
   {
      id: "skills-tailwind-css", 
      text: "Tailwind CSS", 
      src: "/tailwind-css-icon.svg",
      mobileWidth: 90, 
      mobileHeight: 90, 
      desktopWidth: 90, 
      desktopHeight: 90, 
      alt: "Tailwind CSS icon"
   }, 
   {
      id: "skills-postgresql", 
      text: "PostgreSQL", 
      src: "/postgresql-icon.svg",
      mobileWidth: 90, 
      mobileHeight: 90, 
      desktopWidth: 90, 
      desktopHeight: 90, 
      alt: "PostgreSQL icon"
   }, 
   {
      id: "skills-nextjs", 
      text: "NextJS", 
      src: "/nextjs-icon.svg",
      mobileWidth: 90, 
      mobileHeight: 90, 
      desktopWidth: 90, 
      desktopHeight: 90, 
      alt: "NextJS icon"
   }, 
   {
      id: "skills-material-ui", 
      text: "Material UI", 
      src: "/material-ui-icon.svg",
      mobileWidth: 90, 
      mobileHeight: 90, 
      desktopWidth: 90, 
      desktopHeight: 90, 
      alt: "Material UI icon"
   }, 
   {
      id: "skills-html", 
      text: "HTML", 
      src: "/html-icon.svg",
      mobileWidth: 90, 
      mobileHeight: 90, 
      desktopWidth: 90, 
      desktopHeight: 90, 
      alt: "HTML icon"
   }, 
   {
      id: "skills-css", 
      text: "CSS", 
      src: "/css-icon.svg",
      mobileWidth: 90, 
      mobileHeight: 90, 
      desktopWidth: 90, 
      desktopHeight: 90, 
      alt: "CSS icon"
   }, 
   {
      id: "skills-scss", 
      text: "SCSS", 
      src: "/scss-icon.svg",
      mobileWidth: 90, 
      mobileHeight: 90, 
      desktopWidth: 90, 
      desktopHeight: 90, 
      alt: "SCSS icon"
   } 
]

export const bigProjectsContent: ProjectsContent = [
   {
      id: "big-projects1", 
      titleName: "Name:", 
      name: "7FOX7 Moto-Theme App", 
      images: [
         {
            id: "moto-theme-app-image-1", 
            src: "/gray-placeholder.webp", 
            mobileWidth: 90, 
            mobileHeight: 90, 
            desktopWidth: 90, 
            desktopHeight: 90, 
            alt: "gray-placeholder"
         },
         {
            id: "moto-theme-app-image-2", 
            src: "/blue-placeholder.webp", 
            mobileWidth: 90, 
            mobileHeight: 90, 
            desktopWidth: 90, 
            desktopHeight: 90, 
            alt: "blue-placeholder"
         },
      ], 
      titleDescription: "Description:", 
      description: "An engaging website designed for motorcycle enthusiasts! Explore a vibrant community and immerse yourself in the world of biking through crafted routes", 
      titleTechnologies: "Technologies:", 
      technologies: [
         {
            id: "moto-theme-tech-1",
            name: tech.react
         }, 
         {
            id: "moto-theme-tech-2", 
            name: tech.js
         }, 
         {
            id: "moto-theme-tech-3", 
            name: tech.mui
         }, 
         {
            id: "moto-theme-tech-4", 
            name: tech.gsap
         }, 
         {
            id: "moto-theme-tech-5", 
            name: tech.html
         }
      ], 
      titleDemonstration: "Demonstration:", 
      codeLink: {
         text: 'Code', 
         href: 'https://github.com/7FOX7/moto-project', 
         label: 'Open source code on GitHub'
      }, 
      liveLink: {
         text: 'Live', 
         href: 'https://7fox7-moto-website.netlify.app/', 
         label: 'Open live website'
      }
   }, 
   {
      id: "big-projects2", 
      titleName: "Name:", 
      name: "7FOX7 Vibe Share App", 
      images: [
         {
            id: "vibe-share-app-image1", 
            src: "/blue-placeholder.webp", 
            mobileWidth: 90, 
            mobileHeight: 90, 
            desktopWidth: 90, 
            desktopHeight: 90, 
            alt: "blue-placeholder"
         },
         {
            id: "vibe-share-app-image2", 
            src: "/gray-placeholder.webp", 
            mobileWidth: 90, 
            mobileHeight: 90, 
            desktopWidth: 90, 
            desktopHeight: 90, 
            alt: "gray-placeholder"
         },
      ], 
      titleDescription: "Description:", 
      description: "A social media platform where users can engage with content. The main features are: publishing posts and videos and the ability to join clubs by interests", 
      titleTechnologies: "Technologies:", 
      technologies: [
         {
            id: "vibe-share-tech-1",
            name: tech.node
         }, 
         {
            id: "vibe-share-tech-2", 
            name: tech.react
         }, 
         {
            id: "vibe-share-tech-3", 
            name: tech.js
         }, 
         {
            id: "vibe-share-tech-4", 
            name: tech.msql
         }, 
         {
            id: "vibe-share-tech-5", 
            name: tech.html
         }, 
         {
            id: "vibe-share-tech-6", 
            name: tech.mui
         }, 
         {
            id: "vibe-share-tech-7", 
            name: tech.ex
         }, 
         {
            id: "vibe-share-tech-8", 
            name: tech.axi
         }
      ], 
      titleDemonstration: "Demonstration:", 
      codeLink: {
         text: 'Code', 
         href: 'https://github.com/7FOX7/vibe-share-app-project', 
         label: 'Open source code on GitHub'
      }, 
      liveLink: {
         text: 'Live', 
         href: 'https://7fox7-vibe-share-app.netlify.app/', 
         label: 'Open live website'
      }
   },
   {
      id: "big-projects3", 
      titleName: "Name:", 
      name: "7FOX7 Tinder App",
      images: [
         {
            id: "tinder-app-image1", 
            src: "/gray-square-placeholder.webp", 
            mobileWidth: 90, 
            mobileHeight: 90, 
            desktopWidth: 90, 
            desktopHeight: 90, 
            alt: "TypeScript icon"
         },
         {
            id: "tinder-app-image2", 
            src: "/gray-placeholder.webp", 
            mobileWidth: 90, 
            mobileHeight: 90, 
            desktopWidth: 90, 
            desktopHeight: 90, 
            alt: "gray-placeholder"
         },
      ],  
      titleDescription: "Description:", 
      description: "A responsive app that includes features from the original Tinder app, such as the registration process, the ability to add user images to a carousel, and the option to swipe through profiles—up for Superlike, left to Reject, and right to Like—based on whether the user is interested. Built with pure HTML/CSS and JavaScript", 
      titleTechnologies: "Technologies:", 
      technologies: [
         {
            id: "tinder-app-1",
            name: tech.html
         }, 
         {
            id: "tinder-app-2", 
            name: tech.js
         }, 
      ], 
      titleDemonstration: "Demonstration:", 
      codeLink: {
         text: 'Code', 
         href: 'https://github.com/7FOX7/tinder-project', 
         label: 'Open source code on GitHub'
      }, 
      liveLink: {
         text: 'Live', 
         href: 'https://7fox7-tinder-project.netlify.app/', 
         label: 'Open live website'
      }
   }, 
   {
      id: "big-projects4", 
      titleName: "Name:", 
      name: "7FOX7 Fetch News App", 
      images: [
         {
            id: "fetch-news-app-image1", 
            src: "/blue-placeholder.webp", 
            mobileWidth: 90, 
            mobileHeight: 90, 
            desktopWidth: 90, 
            desktopHeight: 90, 
            alt: "blue-placeholder"
         },
         {
            id: "fetch-news-app-image2", 
            src: "/gray-placeholder.webp", 
            mobileWidth: 90, 
            mobileHeight: 90, 
            desktopWidth: 90, 
            desktopHeight: 90, 
            alt: "gray-placeholder"
         },
      ], 
      titleDescription: "Description:", 
      description: "An application that allows users to explore content about Tigers and Sharks. Upon visiting the Welcome page, users can select their preferred animal, which leads to stories, news articles, and images. The application dynamically fetches data from an external API and features pagination for easy navigation", 
      titleTechnologies: "Technologies:", 
      technologies: [
         {
            id: "fetch-news-tech-1",
            name: tech.next
         }, 
         {
            id: "fetch-news-tech-2", 
            name: tech.react
         }, 
         {
            id: "fetch-news-tech-3", 
            name: tech.ts
         }, 
         {
            id: "fetch-news-tech-4", 
            name: tech.twd
         }, 
         {
            id: "fetch-news-tech-5", 
            name: tech.html
         }, 
      ], 
      titleDemonstration: "Demonstration:", 
      codeLink: {
         text: 'Code', 
         href: 'https://github.com/7FOX7/fetching-news', 
         label: 'Open source code on GitHub'
      }, 
      liveLink: {
         text: 'Live', 
         href: 'https://fetching-news.vercel.app/selection',
         label: 'Open live website'
      }
   }, 
   {
      id: "big-projects5", 
      titleName: "Name:", 
      name: "7FOX7 Memory Card Game", 
      images: [
         {
            id: "memory-card-game-image1", 
            src: "/blue-placeholder.webp", 
            mobileWidth: 90, 
            mobileHeight: 90, 
            desktopWidth: 90, 
            desktopHeight: 90, 
            alt: "blue-placeholder"
         },
         {
            id: "memory-card-game-image2", 
            src: "/gray-placeholder.webp", 
            mobileWidth: 90, 
            mobileHeight: 90, 
            desktopWidth: 90, 
            desktopHeight: 90, 
            alt: "gray-placeholder"
         },
      ], 
      titleDescription: "Description:", 
      description: "A game that check user's memory. Includes 3 difficulties, the harder the difficulty, the more cards the user has to remember. The game features a nice KOF card style, background image, and soundtrack", 
      titleTechnologies: "Technologies:", 
      technologies: [
         {
            id: "memory-card-game-tech-1",
            name: tech.js
         }, 
         {
            id: "memory-card-game-tech-2", 
            name: tech.mui
         }, 
         {
            id: "memory-card-game-tech-3", 
            name: tech.react
         }, 
         {
            id: "memory-card-game-tech-4", 
            name: tech.html
         }, 
      ], 
      titleDemonstration: "Demonstration:", 
      codeLink: {
         text: 'Code', 
         href: 'https://github.com/7FOX7/memory-card-game-project', 
         label: 'Open source code on GitHub'
      }, 
      liveLink: {
         text: 'Live', 
         href: 'https://7fox7-memory-card-website.netlify.app/', 
         label: 'Open live website'
      }
   },
   {
      id: "big-projects6", 
      titleName: "Name:", 
      name: "7FOX7 Movie App", 
      images: [
         {
            id: "movie-app-image1", 
            src: "/blue-placeholder.webp", 
            mobileWidth: 90, 
            mobileHeight: 90, 
            desktopWidth: 90, 
            desktopHeight: 90, 
            alt: "blue-placeholder"
         },
         {
            id: "movie-app-image2", 
            src: "/gray-placeholder.webp", 
            mobileWidth: 90, 
            mobileHeight: 90, 
            desktopWidth: 90, 
            desktopHeight: 90, 
            alt: "gray-placeholder"
         },
      ], 
      titleDescription: "Description:", 
      description: "A social media platform where users can book a film and watch movie trailers", 
      titleTechnologies: "Technologies:", 
      technologies: [
         {
            id: "movie-tech-1",
            name: tech.react
         }, 
         {
            id: "movie-tech-2", 
            name: tech.js
         }, 
         {
            id: "movie-tech-3", 
            name: tech.mui
         }, 
         {
            id: "movie-tech-4", 
            name: tech.btrap
         }, 
         {
            id: "movie-tech-5", 
            name: tech.html
         }
      ], 
      titleDemonstration: "Demonstration:", 
      codeLink: {
         text: 'Code', 
         href: 'https://github.com/7FOX7/movie-website-project', 
         label: 'Open source code on GitHub'
      }, 
      liveLink: {
         text: 'Live', 
         href: 'https://7fox7-movie-website.netlify.app/', 
         label: 'Open live website'
      }
   },
]

export const contactMeContent: ContactMeContent = [
   {
      id: 'contact-me-github', 
      textLink: {
         text: 'GitHub', 
         href: 'https://github.com/7FOX7', 
         label: 'Contact the author via GitHub'
      }, 
      iconLink: {
         url: 'https://github.com', 
         href: 'https://github.com/7FOX7'
      }, 
      icon: {
         network: 'github', 
         label: 'GitHub' 
      }
   }, 
   {
      id: 'contact-me-linkedin', 
      textLink: {
         text: 'LinkedIn', 
         href: 'https://www.linkedin.com/in/evgenii-khe-38934a318/', 
         label: 'Contact the author via LinkedIn'
      }, 
      iconLink: {
         url: 'https://linkedin.com', 
         href: 'https://www.linkedin.com/in/evgenii-khe-38934a318/'
      }, 
      icon: {
         network: 'linkedin', 
         label: 'LinkedIn'
      }
   }, 
   {
      id: 'contact-me-email', 
      textLink: {
         text: 'Email', 
         href: 'mailto:kheeugene@gmail.com', 
         label: 'Contact the author via email'
      }, 
      iconLink: {
         url: 'email', 
         href: 'mailto:kheeugene@gmail.com'
      }, 
      icon: {
         network: 'email', 
         label: 'Email'
      }
   }
]