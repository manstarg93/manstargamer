import { device, variables } from "@/styles/global";
import styled from "@emotion/styled";


export const NavHeader = styled.header`
position: fixed;
z-index: 90;
top: 0;
left: 0;
right: 0;

`


export const NavigationComponent = styled.nav`

padding: 2rem 5rem;
min-height: 6rem;

margin: 0 auto;



background-color: ${variables.darkGray};
justify-content: space-between;
align-items: center;

@media screen and (min-width: ${device.tablet}){
    display: flex;
flex-wrap: nowrap;
justify-content: space-between;

}
`

export const GetInTouchButtonContainer = styled.div`

@media screen and (max-width: ${device.laptop}){
display: none;
}

`