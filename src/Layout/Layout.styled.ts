import { device, variables } from "@/styles/global";
import styled from "@emotion/styled";


export const LayoutComponent = styled.main`
padding: 0 2rem;
margin: 0 auto;

@media screen and (min-width: ${device.tablet}){
padding: 0 5rem;
}
`

