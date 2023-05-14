import { ButtonContainer } from "@/component/button/Button.styled";
import { borderMixin, device, variables } from "@/styles/global";
import styled from "@emotion/styled";


export const PortfolioContainer = styled.div`

min-height: 300px;
     display: grid;
       grid-gap: 3rem;

@media screen and (min-width: ${device.tablet}){


       
grid-template-columns: repeat(2, 1fr);
justify-content: space-between;

    }
`

export const SinglePortFolio = styled.div`
${borderMixin};

padding: 10px;
`
export const PortfolioFeatures = styled.div`
position: absolute;
bottom: 5%;
left: 0;
right: 0;
display: none;
flex-wrap: wrap;
width: 100%;
align-items: center;
justify-content: center;
z-index: 9;
`

export const PortfolioFeature = styled.p`
${borderMixin};
padding: 10px;
margin: 5px;

font-size: .7rem;
opacity: .8;

border-radius: 5px;
color: ${variables.white};
background-color: ${variables.darkGray};
cursor: pointer;
`

export const PortfolioImageContainer = styled.div`
position: relative;


img{
object-fit: cover;
border-radius: 0;
height: 100%;
width: 100%;


}

&:hover > ${PortfolioFeatures}{
display: flex;
}
`



export const PortfolioTitleAndLink = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
`

export const PortfolioTitle = styled.h2`
width: 100%;
font-size: 1.3rem;
`

export const PortFolioLinkContainer = styled.div`
display: grid;
grid-gap: 1rem;
grid-template-columns: repeat(2, 1fr);

align-items: center;
`

export const ViewMoreButtonContainer= styled.div`
margin: 0 auto;
text-align: center;
margin-top: 4rem;
justify-self: center;

`