'use client'

import { useSearchParams } from "next/navigation"
import ContentStorage from "../ui/content-storage"
import ContentWrapper from "./content-wrapper"

const InfoBlock = ({type}: {type: string}): JSX.Element => {   
   const searchParams = useSearchParams(); 
   const param = searchParams.get(type)
   const InfoContent = ContentStorage.get(param || 'contact-me')

   return (
      <ContentWrapper>
         <InfoContent />
      </ContentWrapper>
   )
}

export default InfoBlock