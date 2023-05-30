
import { RefObject } from "react"
import { NavLinksContainer,NavLink } from "./NavLinks.styled"


interface INavLinks {
  
      aboutRef: RefObject<HTMLDivElement>
       portfolioRef: RefObject<HTMLDivElement>
contactRef: RefObject<HTMLDivElement>
skillRef: RefObject<HTMLDivElement>
}
const NavLinks = ({aboutRef,portfolioRef,contactRef,skillRef}:INavLinks) => {

const scrollToNavHandler = (refObj: RefObject<HTMLDivElement>) => {
    refObj.current?.scrollIntoView({ behavior: 'smooth' });
}

  return (
   <NavLinksContainer>
         <NavLink onClick={() => scrollToNavHandler(portfolioRef)} >Projects</NavLink>
     <NavLink onClick={() => scrollToNavHandler(aboutRef)} >About</NavLink>
   
     <NavLink onClick={() => scrollToNavHandler(skillRef)} >Skills</NavLink>
     <NavLink onClick={() => scrollToNavHandler(contactRef)} >Contact</NavLink>

   </NavLinksContainer>
  )
}
export default NavLinks