
import { RefObject } from "react"
import { NavLinksContainer,NavLink } from "./NavLinks.styled"


interface INavLinks {
  
      aboutRef: RefObject<HTMLDivElement>
       portfolioRef: RefObject<HTMLDivElement>
contactRef: RefObject<HTMLDivElement>
skillRef: RefObject<HTMLDivElement>
}
const NavLinks = ({aboutRef,portfolioRef,contactRef,skillRef}:INavLinks) => {

const scrollToNavHandler = () => {
    // myRef.current?.scrollIntoView({ behavior: 'smooth' });
}

  return (
   <NavLinksContainer>
         <NavLink onClick={() => portfolioRef.current?.scrollIntoView({behavior: "smooth"})} >Projects</NavLink>
     <NavLink onClick={() => aboutRef.current?.scrollIntoView({behavior: "smooth"})} >About</NavLink>
   
     <NavLink onClick={() => skillRef.current?.scrollIntoView({behavior: "smooth"})} >Skills</NavLink>
     <NavLink onClick={() => contactRef.current?.scrollIntoView({behavior: "smooth"})} >Contact</NavLink>

   </NavLinksContainer>
  )
}
export default NavLinks