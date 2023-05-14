import SectionWrapper from "@/component/sectionWrapper/SectionWrapper"
import { socialIcons } from "@/component/social/socialData"
import SocialIcons from "@/component/social/SocialIcons"
import Title from "../../component/title/Title"
import Link from "next/link"
import { RefObject } from "react"
import { ContactContainer, ContactIconContainer, EmailLink } from "./Contact.styled"


interface IContact {
  
    contactRef: RefObject<HTMLDivElement>
}

const Contact = ({contactRef}: IContact) => {
  return (
   <SectionWrapper componentRef={contactRef}>
       <Title title="Contact"/>
       <ContactContainer>
           <h2>Get In Touch</h2>
           <EmailLink href={"mailto:manstarg93@gmail.com"} target="_blank">Email: manstarg93@gmail.com</EmailLink>
        <ContactIconContainer>
            <SocialIcons mySocialIcons={socialIcons}/>
        </ContactIconContainer>
       </ContactContainer>
   </SectionWrapper>
  )
}
export default Contact