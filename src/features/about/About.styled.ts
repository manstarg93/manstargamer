import { device } from "@/styles/global";
import styled from "@emotion/styled";


export const AboutContainer = styled.section`
margin: 5rem auto;
width: 70%;
`

export const AboutComponent = styled.div`


`



export const AboutAndDescription = styled.div`

display: grid;
grid-gap: 2rem;
grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
justify-content: center;
align-items: center;
`

export const AboutImageContainer = styled.div`

margin: 0 auto;
img{
    object-fit: cover;
    margin: 0 auto;
    

    @media screen and (min-width: ${device.tablet}){

    }
 
}
`

export const AboutDescriptionContainer = styled.div`

`

export const AboutDescriptionTitle = styled.h2`
padding-bottom: 20px;
`



export const AboutDescription = styled.p`
padding: 5px 0;
`