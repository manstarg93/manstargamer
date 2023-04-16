import { device, variables } from "@/styles/global";
import styled from "@emotion/styled";


export const NavigationComponent = styled.nav`
display: flex;
padding: 2rem 0;
flex-wrap: wrap;
min-height: 6rem;
position: fixed;
top: 0;
left: 0;
right: 0;
width: 100%;


background-color: ${variables.darkGray};
justify-content: center;
align-items: center;

@media screen and (min-width: ${device.tablet}){
flex-wrap: nowrap;
justify-content: space-between;

}
`

export const GetInTouchButtonContainer = styled.div`

@media screen and (max-width: ${device.laptop}){
display: none;
}

`