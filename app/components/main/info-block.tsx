'use client'

import { useSearchParams } from "next/navigation"
import ContentStorage from "../ui/content-storage"
import ContentWrapper from "./content-wrapper"

const InfoBlock = ({type}: {type: string}): JSX.Element => {   
   // const router = useRouter()
   const searchParams = useSearchParams(); 
   const param = searchParams.get(type) || "contact-me"
   const InfoContent = ContentStorage.get(param)

   // useEffect(() => {
   //    router.replace('/?about-me=education&projects=big-projects')
   // }, [])

   return (
      <ContentWrapper>
         <InfoContent />
      </ContentWrapper>
   )
}

export default InfoBlock