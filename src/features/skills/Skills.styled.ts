import { borderMixin, boxShadow, device, slideAnimation, variables } from "@/styles/global"
import styled from "@emotion/styled"




export const SkillsContainer = styled.div`


margin: 0 auto;
padding: 20px;
${borderMixin};



@media screen and (min-width: ${device.tablet}){

}
`
export const SkillSummaryTitle = styled.h2`
padding: 20px 0;
font-size: 2rem;
text-transform: capitalize;
font-weight: bolder;

text-align: center;
`


export const SkillContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;



@media screen and (min-width: ${device.tablet}){

}
`



export const SkillBox = styled.div`
min-width: 100%;
min-height: 300px;
margin: 2rem;
${borderMixin}

@media screen and (min-width: ${device.tablet}){
min-width: 33.33%;
}
`
export const SkillTitle = styled.h2`

background-color: ${variables.white};
padding: 10px;
color: ${variables.orange};
`

export const Skill = styled.p`
font-size: 1.2rem;
padding: 10px;

cursor: pointer;
transition: all .5s linear;
/* animation: ${slideAnimation} .5s linear; */

&:hover{
background-color: ${variables.darkgraylight};
color: ${variables.white};
}
`