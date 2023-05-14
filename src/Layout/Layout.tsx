import Navigation from "@/component/nav/Navigation"
import { ComponentPropsWithoutRef, RefObject } from "react"
import { LayoutComponent } from "./Layout.styled"

interface ILayout extends React.ComponentPropsWithoutRef<"main">{
aboutRef: RefObject<HTMLDivElement>
portfolioRef: RefObject<HTMLDivElement>
contactRef: RefObject<HTMLDivElement>
skillRef: RefObject<HTMLDivElement>
}
const Layout = ({children,aboutRef,portfolioRef,contactRef,skillRef}:ILayout) => {
  return (
<LayoutComponent>

    <Navigation aboutRef={aboutRef}    portfolioRef={portfolioRef} 
     skillRef={skillRef} 
     contactRef={contactRef}/>
    {children}
</LayoutComponent>
  )
}
export default Layout