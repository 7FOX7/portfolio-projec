export type SpotlightProps = {
   className?: string;
   fill?: string;
};

export type ImageProps = {
   mobileSrc: string;  
   mobileWidth: number; 
   mobileHeight: number; 
   desktopSrc: string; 
   desktopWidth: number; 
   desktopHeight: number;
   alt: string;  
}

export type Sections = {
   id: string, 
   name: string, 
   value: string
}[]