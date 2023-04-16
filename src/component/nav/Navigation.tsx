import Button from "../button/Button"
import NavLinks from "./NavLinks"
import { GetInTouchButtonContainer, NavigationComponent } from "./Navigation.styled"
import SocialIcons from "../social/SocialIcons"
import { navData } from "./navData"



const Navigation = () => {
  return (
   <NavigationComponent>
      <SocialIcons/>
      
      
       <NavLinks navData={navData}/>
       <GetInTouchButtonContainer>
 <Button>GET IN TOUCH</Button>
      </GetInTouchButtonContainer>
       </NavigationComponent>
  )
}
export default Navigation