import Image from "next/image"
import Typewriter from 'typewriter-effect'
import { IntroContainer, IntroDataContainer, IntroName, IntroTitle, PortfolioImageContainer } from "./Intro.styles"
import me from '../../assets/img/portfoliome.jpg'
import { useEffect } from "react"
import { introType } from "./introType"


interface IIntro {
    intro: introType
}
const Intro = ({intro}: IIntro) => {

    return <IntroContainer>
        {intro ? intro.map(data => {

        const {_id,typeText1,typeText2,imageUrl,occupation} = data

            return <IntroDataContainer key={_id}>
             <PortfolioImageContainer><Image src={imageUrl} alt='portfolioMe' width={70} height={70} priority/></PortfolioImageContainer>
        
      <IntroName>
 <Typewriter
            onInit={(typewriter)=> {
  
       typewriter
        
       .typeString(typeText1)
       
       .pauseFor(1000)
       .deleteAll()
       .typeString(typeText2)
       .start();
       }}
            />
      </IntroName>
           
       
        <IntroTitle>{occupation}</IntroTitle>
            </IntroDataContainer>
            
  
    }) :  <p>Loading...</p>}
    </IntroContainer>
    
  

 

    


}
export default Intro