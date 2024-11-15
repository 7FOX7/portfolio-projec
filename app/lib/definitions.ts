
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

export type CarouselProps<T> = {
   // create a type for the array which will be type of a T
   items: T[],       // 'T' will be replaced with whatever type you are going to pass in as an argument (assuming you will have a fun  ction type of a CarouselProps<T>) or, It is going to be determined just on the fly
   keys: string[], 
   // create a renderedItem prop 
   renderedItem: (item: T) => React.ReactNode,  // whatever you are passing in as an item, will end up being a React element 
   control: "swipe" | "navigation" | "pagination", 
   allowGrab: boolean
}

export type AccordionProps<T> = {
	wrapperKey: string, 
	values: {
		key: string,
		heading: string, 
		content: T
	}[]
}


