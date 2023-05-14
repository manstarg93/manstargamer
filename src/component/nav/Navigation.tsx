import Button from "../button/Button"
import NavLinks from "./NavLinks"
import { GetInTouchButtonContainer, NavHeader, NavigationComponent } from "./Navigation.styled"
import SocialIcons from "../social/SocialIcons"
import { navData } from "./navData"
import { socialIcons } from "../social/socialData"
import Link from "next/link"
import { RefObject } from "react"

interface INavigation {
  aboutRef: RefObject<HTMLDivElement>
  portfolioRef: RefObject<HTMLDivElement>
contactRef: RefObject<HTMLDivElement>
skillRef: RefObject<HTMLDivElement>
}


const Navigation = ({aboutRef,portfolioRef,contactRef,skillRef}:INavigation) => {
  return (
    <NavHeader>
<NavigationComponent>
      <SocialIcons mySocialIcons={socialIcons}/>
      
      
       <NavLinks aboutRef={aboutRef}    portfolioRef={portfolioRef} 
     skillRef={skillRef} 
     contactRef={contactRef} />
       <GetInTouchButtonContainer>
         <Link href={"mailto:manstarg93@gmail.com"} target="_blank">
<Button>GET IN TOUCH</Button>
         </Link>
 
      </GetInTouchButtonContainer>
       </NavigationComponent>
    </NavHeader>
   
  )
}
export default Navigation