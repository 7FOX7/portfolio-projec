import { SocialIcon } from "react-social-icons"
import 'react-social-icons/email'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import { SocialIconLinkProps } from "@/app/lib/definitions"

const SocialIconLink = ({url, href, label}: SocialIconLinkProps) => {
   return (
      <>
         <SocialIcon 
            url={url}
            href={href}
            target="_blank"
            className="!w-full !h-full hover:scale-110 transition-[1s]"
            label={label}
            bgColor="rgba(0, 255, 167, 0.4)"
         />
      </>
   )
}

export default SocialIconLink