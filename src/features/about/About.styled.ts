import { borderMixin, device } from "@/styles/global";
import styled from "@emotion/styled";







export const AboutAndDescription = styled.div`

margin: 0 auto;
display: flex;
justify-content: space-between;
flex-wrap: wrap;

justify-content: center;


${borderMixin}


    @media screen and (min-width: ${device.laptop}){
        flex-wrap: nowrap;
        
    }
`

export const AboutImageContainer = styled.div`

margin: 0 auto;
padding: 0 2rem;
display: flex;
align-items: center;
img{
    object-fit: cover;
    

    @media screen and (min-width: ${device.tablet}){

    }
 
}
`

export const AboutDescriptionContainer = styled.div`
padding: 2rem;
`

export const AboutDescriptionTitle = styled.h2`
padding-bottom: 20px;
`



export const AboutDescription = styled.p`
padding: 5px 0;

`