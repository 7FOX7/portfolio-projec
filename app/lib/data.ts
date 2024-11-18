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
   btrap: "Bootstrap",
   arg2: "Argon2", 
   jwt: "JWT Token"
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
      name: "Moto-Theme App", 
      images: [
         {
            id: "moto-theme-app-image-1", 
            src: "https://utfs.io/f/4pLOQ5TaIveDqoX6ybVJDFhU1KB5EiXA3MHctugNp4mV6LGP", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Moto theme preview image 1"
         },
         {
            id: "moto-theme-app-image-2", 
            src: "https://utfs.io/f/4pLOQ5TaIveDRcNzSgkQ8o4Y6cgmvpWPDl3hjEwxbJNLyqaA", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200,  
            alt: "Moto theme preview image 2"
         },
         {
            id: "moto-theme-app-image-3", 
            src: "https://utfs.io/f/4pLOQ5TaIveDFcObuhYID8MOvVXxq2AWfn6YrtQwgPy7UZSs", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Moto theme preview image 3"
         },
         {
            id: "moto-theme-app-image-4", 
            src: "https://utfs.io/f/4pLOQ5TaIveD8gQg5J9MYjbBsrZQ6zi0ov4dT7pyWxGtN2Jc", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200,  
            alt: "Moto theme preview image 4"
         },
         {
            id: "moto-theme-app-image-5", 
            src: "https://utfs.io/f/4pLOQ5TaIveDFdPJ8NYID8MOvVXxq2AWfn6YrtQwgPy7UZSs", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Moto theme preview image 5"
         },
         {
            id: "moto-theme-app-image-6", 
            src: "https://utfs.io/f/4pLOQ5TaIveDaH4fQqND40b6AxRkdEX3floD1WjhwLu9gziF", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Moto theme preview image 6"
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
      name: "Vibe Share App", 
      images: [
         {
            id: "vibe-share-app-image1", 
            src: "https://utfs.io/f/4pLOQ5TaIveDllV9wtrH6u5sfn0Jtp9WNUXkFwYv4xieMGrT", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Vibe-share app preview image 1"
         },
         {
            id: "vibe-share-app-image2", 
            src: "https://utfs.io/f/4pLOQ5TaIveDbMaOqKBF4drpvUyiouT09qahnH1Y26VKeCRO", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200,  
            alt: "Vibe-share app preview image 2"
         },
         {
            id: "vibe-share-app-image3", 
            src: "https://utfs.io/f/4pLOQ5TaIveDhieHb2WJNAm01DEIrlgvWsxyueCKq8HkBwX9", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Vibe-share app preview image 3"
         },
         {
            id: "vibe-share-app-image4", 
            src: "https://utfs.io/f/4pLOQ5TaIveD1b7TVctqtTNUBfkH7JY0dC8QMvD9gKW2Zwbu", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200,  
            alt: "Vibe-share app preview image 4"
         },
         {
            id: "vibe-share-app-image5", 
            src: "https://utfs.io/f/4pLOQ5TaIveDKdZxnWEPfX5KQaObGmETu4vq2VJ98dYLer3D", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200,  
            alt: "Vibe-share app preview image 5"
         },
         {
            id: "vibe-share-app-image6", 
            src: "https://utfs.io/f/4pLOQ5TaIveDz8J4q6vdD7SJ69fhmNEFWRnAlQUKViCqts3u", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Vibe-share app preview image 6"
         },
         {
            id: "vibe-share-app-image7", 
            src: "https://utfs.io/f/4pLOQ5TaIveDoWxKyJ2R4uIcSPUFOjYKpDogbd6zBQ9wMkHT", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200,  
            alt: "Vibe-share app preview image 7"
         },
         {
            id: "vibe-share-app-image8", 
            src: "https://utfs.io/f/4pLOQ5TaIveDSswM4Gb7FnJKiQ9vlab8fpZOdPgMyCxUzWcj", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200,  
            alt: "Vibe-share app preview image 8"
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
      name: "Tinder App",
      images: [
         {
            id: "tinder-app-image1", 
            src: "https://utfs.io/f/4pLOQ5TaIveDR35xKOqkQ8o4Y6cgmvpWPDl3hjEwxbJNLyqa", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Tinder app preview image 1"
         },
         {
            id: "tinder-app-image2", 
            src: "https://utfs.io/f/4pLOQ5TaIveDr4mChGMu5QalYMN1iTE9X6WZw0jHsBpqUxhF", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Tinder app preview image 2"
         },
         {
            id: "tinder-app-image3", 
            src: "https://utfs.io/f/4pLOQ5TaIveDY2YPHweAi4UGwaKhT86QCEBtZzkWdgf1pLSo", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Tinder app preview image 3"
         },
         {
            id: "tinder-app-image4", 
            src: "https://utfs.io/f/4pLOQ5TaIveDbvQhEaSBF4drpvUyiouT09qahnH1Y26VKeCR", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Tinder app preview image 4"
         },
         {
            id: "tinder-app-image5", 
            src: "https://utfs.io/f/4pLOQ5TaIveDtFYxcd641bkOi3IKDelnpztfgGaFsqP9oJSr", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Tinder app preview image 5"
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
      name: "Fetch News App", 
      images: [
         {
            id: "fetch-news-app-image1", 
            src: "https://utfs.io/f/4pLOQ5TaIveDMIffIJoZsbotiDk8my7lupwYczM4hNe9n5rj", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Fetch news app preview image 1"
         },
         {
            id: "fetch-news-app-image2", 
            src: "https://utfs.io/f/4pLOQ5TaIveDRCJ5bRkQ8o4Y6cgmvpWPDl3hjEwxbJNLyqaA", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Fetch news app preview image 2"
         },
         {
            id: "fetch-news-app-image3", 
            src: "https://utfs.io/f/4pLOQ5TaIveDjF0P7nIp1Ee0zWfZ9mPn3JvkT6FN84axgMwd", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Fetch news app preview image 3"
         },
         {
            id: "fetch-news-app-image4", 
            src: "https://utfs.io/f/4pLOQ5TaIveDE2Rt6J1Md8je4r5M0hOfqBkTFmytui9SCD2Z", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Fetch news app preview image 4"
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
      name: "Memory Card Game", 
      images: [
         {
            id: "memory-card-game-image1", 
            src: "https://utfs.io/f/4pLOQ5TaIveDDLjr1Epblru4VNo9tX8xTS7maAwfeqgyZcpi", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Memory card game preview image 1"
         },
         {
            id: "memory-card-game-image2", 
            src: "https://utfs.io/f/4pLOQ5TaIveDDvuoI6pblru4VNo9tX8xTS7maAwfeqgyZcpi", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Memory card game preview image 1"
         },
         {
            id: "memory-card-game-image3", 
            src: "https://utfs.io/f/4pLOQ5TaIveDrLEdbxu5QalYMN1iTE9X6WZw0jHsBpqUxhFS", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Memory card game preview image 3"
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
      name: "Movie App", 
      images: [
         {
            id: "movie-app-image1", 
            src: "https://utfs.io/f/4pLOQ5TaIveDTn0WFtmh7mkA0t1sZolxVMYO6crEf5zyD8jq", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Movie app preview image 1"
         },
         {
            id: "movie-app-image2", 
            src: "https://utfs.io/f/4pLOQ5TaIveDApraoAigYCb1BesFJNhLTxQuK2w9ofVkDr7v", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Movie app preview image 2"
         },
         {
            id: "movie-app-image3", 
            src: "https://utfs.io/f/4pLOQ5TaIveDa4BFsED40b6AxRkdEX3floD1WjhwLu9gziFe", 
            mobileWidth: 400, 
            mobileHeight: 235,
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Movie app preview image 3"
         },
         {
            id: "movie-app-image4", 
            src: "https://utfs.io/f/4pLOQ5TaIveDMGknYqoZsbotiDk8my7lupwYczM4hNe9n5rj", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Movie app preview image 4"
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

export const demosContent: ProjectsContent = [
   {
      id: "demos1", 
      titleName: "Name:", 
      name: "Contact Us Page",
      images: [
         {
            id: "contact-us-image-1", 
            src: "https://utfs.io/f/4pLOQ5TaIveDKiYPSlEPfX5KQaObGmETu4vq2VJ98dYLer3D",
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Contact us page preview image 1"
         },
         {
            id: "contact-us-image-2", 
            src: "https://utfs.io/f/4pLOQ5TaIveD19UlRHtqtTNUBfkH7JY0dC8QMvD9gKW2Zwbu", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200,  
            alt: "Contact us page preview image 2"
         }
      ], 
      titleDescription: "Description:", 
      description: "A fully functional 'Contact Us Form' that allows users to submit their inquiries and feedback. After successful submission, users receive a confirmation email to the address they provided, confirming that their inquiry has been received", 
      titleTechnologies: "Technologies:", 
      technologies: [
         {
            id: "contact-us-tech-1",
            name: tech.react
         }, 
         {
            id: "contact-us-tech-2", 
            name: tech.ts
         }, 
         {
            id: "contact-us-tech-3", 
            name: tech.next
         }, 
      ], 
      titleDemonstration: "Demonstration:", 
      codeLink: {
         text: 'Code', 
         href: 'https://github.com/7FOX7/contact-us-page', 
         label: 'Open source code on GitHub'
      }, 
      liveLink: {
         text: 'Live', 
         href: 'https://contact-us-page-green.vercel.app/', 
         label: 'Open live website'
      }
   }, 
   {
      id: "demos2", 
      titleName: "Name:", 
      name: "Role-Based Auth App",
      images: [
         {
            id: "role-based-auth-image-1", 
            src: "https://utfs.io/f/4pLOQ5TaIveDMFi5pwoZsbotiDk8my7lupwYczM4hNe9n5rj", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Role-based auth app preview image 1"
         },
         {
            id: "role-based-auth-image-2", 
            src: "https://utfs.io/f/4pLOQ5TaIveDiZ0IEERvLTnUu0p5MqHProAjN1wmE39bCBWe", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Role-based auth app preview image 2"
         },
         {
            id: "role-based-auth-image-3", 
            src: "https://utfs.io/f/4pLOQ5TaIveD1WFr4PtqtTNUBfkH7JY0dC8QMvD9gKW2Zwbu", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200,
            alt: "Role-based auth app preview image 3"
         },
         {
            id: "role-based-auth-image-4", 
            src: "https://utfs.io/f/4pLOQ5TaIveDtERcdsa641bkOi3IKDelnpztfgGaFsqP9oJS", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200,
            alt: "Role-based auth app preview image 4"
         },
         {
            id: "role-based-auth-image-5", 
            src: "https://utfs.io/f/4pLOQ5TaIveDiJ2bj7RvLTnUu0p5MqHProAjN1wmE39bCBWe", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200,
            alt: "Role-based auth app preview image 5"
         },
      ], 
      titleDescription: "Description:", 
      description: "A Next.js app, offers a robust authentication and authorization system. Users can register and log in, with access managed by roles: admins and regular users. Key features include secure authentication, role-based access, and restricted access for regular users. Unauthenticated users are redirected to the login page when accessing protected routes", 
      titleTechnologies: "Technologies:", 
      technologies: [
         {
            id: "role-based-auth-tech-1",
            name: tech.react
         }, 
         {
            id: "role-based-auth-tech-2", 
            name: tech.ts
         }, 
         {
            id: "role-based-auth-tech-3", 
            name: tech.jwt
         }, 
         {
            id: "role-based-auth-tech-4", 
            name: tech.twd
         }, 
         {
            id: "role-based-auth-tech-5", 
            name: tech.next
         }
      ], 
      titleDemonstration: "Demonstration:", 
      codeLink: {
         text: 'Code', 
         href: 'https://github.com/7FOX7/role-based-auth-project', 
         label: 'Open source code on GitHub'
      }, 
      liveLink: {
         text: 'Live', 
         href: 'https://role-based-auth-project.vercel.app/login', 
         label: 'Open live website'
      }
   }, 
   {
      id: "demos3", 
      titleName: "Name:", 
      name: "Amazon App",
      images: [
         {
            id: "amazon-image-1", 
            src: "https://utfs.io/f/4pLOQ5TaIveDE2Y9nIPMd8je4r5M0hOfqBkTFmytui9SCD2Z", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Amazon app preview image 1"
         },
         {
            id: "amazon-image-2", 
            src: "https://utfs.io/f/4pLOQ5TaIveDBcGBaQzHuql5Mz7VgJThKkijS629pnd0aIbL", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Amazon app preview image 2"
         },
         {
            id: "amazon-image-3", 
            src: "https://utfs.io/f/4pLOQ5TaIveDuyjF97QFoWlxLQSuNkwtEIZbMP3ROHf0iTJ2", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Amazon app preview image 3"
         },
         {
            id: "amazon-image-4", 
            src: "https://utfs.io/f/4pLOQ5TaIveDK3cOFMEPfX5KQaObGmETu4vq2VJ98dYLer3D", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200,  
            alt: "Amazon app preview image 4"
         },
      ], 
      titleDescription: "Description:", 
      description: "An e-commerce website, where a user can add items to the cart, specify the delivery date and make a payment", 
      titleTechnologies: "Technologies:", 
      technologies: [
         {
            id: "amazon-tech-1", 
            name: tech.html
         }, 
         {
            id: "amazon-tech-2", 
            name: tech.js
         },
      ], 
      titleDemonstration: "Demonstration:", 
      codeLink: {
         text: 'Code', 
         href: 'https://github.com/7FOX7/amazon-project', 
         label: 'Open source code on GitHub'
      }, 
      liveLink: {
         text: 'Live', 
         href: 'https://7fox7-amazon-project.netlify.app/', 
         label: 'Open live website'
      }
   },
   {
      id: "demos4", 
      titleName: "Name:", 
      name: "Medical Form",
      images: [
         {
            id: "medical-form-image-1", 
            src: "https://utfs.io/f/4pLOQ5TaIveDAM4D6nigYCb1BesFJNhLTxQuK2w9ofVkDr7v", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Medical form preview image 1"
         },
         {
            id: "medical-form-image-2", 
            src: "https://utfs.io/f/4pLOQ5TaIveD49Uc5vTaIveDGptcUfyl9ETRn2CZOs0qJFdQ", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Medical form preview image 2"
         }, 
         {
            id: "medical-form-image-3", 
            src: "https://utfs.io/f/4pLOQ5TaIveDYuc3g4eAi4UGwaKhT86QCEBtZzkWdgf1pLSo", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Medical form preview image 3"
         }
      ], 
      titleDescription: "Description:", 
      description: "A responsive medical form which gathers user info", 
      titleTechnologies: "Technologies:", 
      technologies: [
         {
            id: "medical-form-tech-1",
            name: tech.html
         }, 
         {
            id: "medical-form-tech-2", 
            name: tech.js
         }, 
      ], 
      titleDemonstration: "Demonstration:", 
      codeLink: {
         text: 'Code', 
         href: 'https://github.com/7FOX7/medical-form-project', 
         label: 'Open source code on GitHub'
      }, 
      liveLink: {
         text: 'Live', 
         href: 'https://7fox7-medical-form.netlify.app/', 
         label: 'Open live website'
      }
   }, 
   {
      id: "demos5", 
      titleName: "Name:", 
      name: "Resume Builder App",
      images: [
         {
            id: "resume-builder-image-1", 
            src: "https://utfs.io/f/4pLOQ5TaIveDojHPfo2R4uIcSPUFOjYKpDogbd6zBQ9wMkHT", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200,  
            alt: "Resume builder app preview image 1"
         },
      ], 
      titleDescription: "Description:", 
      description: "A resume builder app featuring a preview, allowing a user to see how his resume will look like", 
      titleTechnologies: "Technologies:", 
      technologies: [
         {
            id: "resume-builder-tech-1",
            name: tech.react
         }, 
         {
            id: "resume-builder-tech-2", 
            name: tech.mui
         }, 
         {
            id: "resume-builder-tech-3", 
            name: tech.html
         }, 
         {
            id: "resume-builder-tech-4", 
            name: tech.js
         },
      ], 
      titleDemonstration: "Demonstration:", 
      codeLink: {
         text: 'Code', 
         href: 'https://github.com/7FOX7/resume-template-project', 
         label: 'Open source code on GitHub'
      }, 
      liveLink: {
         text: 'Live', 
         href: 'https://7fox7-resume-builder-website.netlify.app/', 
         label: 'Open live website'
      }
   },
   {
      id: "demos6", 
      titleName: "Name:", 
      name: "Patient Info",
      images: [
         {
            id: "patient-info-image-1", 
            src: "https://utfs.io/f/4pLOQ5TaIveD7vg1vIxTpynAaHSfehJMZc5Rud1BD3j6NKX0", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200, 
            alt: "Patient info preview image 1"
         },
         {
            id: "patient-info-image-2", 
            src: "https://utfs.io/f/4pLOQ5TaIveDX80o2AaXS3Arls4Y9OjWQztuGPU6NdJyxv7C", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200,  
            alt: "Patient info preview image 2"
         },
         {
            id: "patient-info-image-3", 
            src: "https://utfs.io/f/4pLOQ5TaIveD5hGlKrjhxgwOY5SUHsdW0uACvq7KtJDm8Ika", 
            mobileWidth: 400, 
            mobileHeight: 235, 
            desktopWidth: 400, 
            desktopHeight: 200,  
            alt: "Patient info preview image 3"
         },
      ], 
      titleDescription: "Description:", 
      description: "A responsive HTML page with appealing styling", 
      titleTechnologies: "Technologies:", 
      technologies: [
         {
            id: "patient-info-tech-1", 
            name: tech.html
         }, 
      ], 
      titleDemonstration: "Demonstration:", 
      codeLink: {
         text: 'Code', 
         href: 'https://github.com/7FOX7/patient-info-project', 
         label: 'Open source code on GitHub'
      }, 
      liveLink: {
         text: 'Live', 
         href: 'https://7fox7-patient-info.netlify.app/', 
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
         label: 'Contact the author via GitHub'
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
         label: 'Contact the author via LinkedIn'
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
         label: 'Contact the author via email'
      }
   }
]