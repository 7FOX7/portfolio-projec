
export type SpotlightProps = {
   className?: string;
   fill?: string;
};

export type ImageProps = {
   id: string; 
   src: string; 
   alt: string;  
   mobileWidth: number; 
   mobileHeight: number; 
   desktopWidth: number; 
   desktopHeight: number;
}

export type Sections = {
   id: string; 
   name: string;  
   value: string; 
}[]

export type SectionLinks = {
   id: string;  
   name: string;  
   path: string;    
   subLinks?: {
      id: string; 
      name: string; 
      path: string;   
      value: string;   
   }[]
}[]

type IconLink = {
   url: string, 
   href: string
}

type TextLink = {
   text: string,
   href: string
}

type DefaultArr = {
   id: string, 
   name: string, 
}[]

export type SocialIconProps = {
   network?: string | undefined, 
   label: string
}

export type SocialIconLinkProps = SocialIconProps & IconLink

export type InfoContent<T> = T

export type EducationContent = InfoContent<{id: string, title: string, description: string}>[]

export type SkillsContent = InfoContent<{id: string, text: string}> & ImageProps

export type ProjectsContent = InfoContent<{id: string, titleName: "Name:",  name: string, images: ImageProps[], titleDescription: "Description:", description: string, titleTechnologies: "Technologies:", technologies: DefaultArr, titleDemonstration: "Demonstration:", codeLink: TextLink, liveLink: TextLink}>[]

export type ContactMeContent = InfoContent<{id: string, link: TextLink, icon: SocialIconProps}>[]