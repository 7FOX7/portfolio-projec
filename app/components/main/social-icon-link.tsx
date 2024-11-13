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
            className="w-[40px] h-[40px]"
            label={label}
         />
      </>
   )
}

export default SocialIconLink