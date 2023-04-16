import Navigation from "@/component/nav/Navigation"
import { ComponentPropsWithoutRef } from "react"
import { LayoutComponent } from "./Layout.styled"

interface ILayout extends React.ComponentPropsWithoutRef<"main">{

}
const Layout = ({children}:ILayout) => {
  return (
<LayoutComponent>
    <Navigation/>
    {children}
</LayoutComponent>
  )
}
export default Layout