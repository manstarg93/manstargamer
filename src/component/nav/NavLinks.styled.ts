import { device, variables } from "@/styles/global";
import styled from "@emotion/styled";

export const NavLinksContainer = styled.ul`

display: flex;
justify-content: center;

align-items: center;
margin: 1rem;
@media screen and (min-width: ${device.laptop}){
flex-wrap: nowrap;
margin: 0;

}
`

export const NavLink = styled.li`
margin: 0 0.5rem;
list-style: none;
cursor: pointer;
text-transform: uppercase;
color: ${variables.gray};
padding-bottom: 5px;

&:hover{
    border-bottom: solid .5px ${variables.gray};
}
`