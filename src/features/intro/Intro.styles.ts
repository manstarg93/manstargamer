import { device, variables } from "@/styles/global";
import styled from "@emotion/styled";




export const IntroDataContainer = styled.div`
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: solid .5px ${variables.gray};
border-radius: 50%;
width: 100%;
margin: 0 auto;
@media screen and (min-width: ${device.tablet}){
width: 400px;
height: 400px;
}
`

export const PortfolioImageContainer = styled.div`



overflow: hidden;
margin: 0 auto;

padding-bottom: 10px;
img{
    display: inline-block;
    width: auto;
    height: 100%;
border-radius: 40%;
object-fit: cover;
}
`

export const IntroTitle = styled.p`
text-transform: uppercase;
font-weight: bold;
text-align: center;
padding-top: 10px;

`

export const IntroName = styled.h1`
color: ${variables.white};
text-transform: capitalize;
font-weight: bold;
font-size: 1.5rem;
text-align: center;

`