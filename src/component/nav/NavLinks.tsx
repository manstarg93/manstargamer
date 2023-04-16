
import { NavLinksContainer,NavLink } from "./NavLinks.styled"


interface INavLinks {
    navData: {title: string,
    link: string}[]
}
const NavLinks = ({navData}:INavLinks) => {
  return (
   <NavLinksContainer>
       {navData.map(data => {
           const {title,link} = data
           return <NavLink key={title}>{title}</NavLink>
       })}
   </NavLinksContainer>
  )
}
export default NavLinks