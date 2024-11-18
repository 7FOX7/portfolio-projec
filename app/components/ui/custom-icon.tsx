import { SocialIcon } from "react-social-icons"
import 'react-social-icons/email'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import { IconProps } from "@/app/lib/definitions"

const Icon = ({network, label}: IconProps) => {
   return (
      <SocialIcon 
         network={network}
         className="!w-full !h-full"
         label={label}
      />
   )
}

export default Icon