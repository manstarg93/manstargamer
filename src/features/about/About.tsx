import { AboutAndDescription, AboutComponent, AboutContainer, AboutDescription, AboutDescriptionContainer, AboutDescriptionTitle, AboutImageContainer } from "./About.styled"
import Title from '../../component/title/Title'
import me from '../../assets/img/portfoliome.jpg'
import Image from "next/image"
import { aboutType } from "./aboutType"
import {PortableText} from '@portabletext/react'


interface IAbout {
    about: aboutType
}
const About = ({about}:IAbout) => {

    console.log(about)
  return (
      <AboutContainer>
          {about ? about.map(data => {
              const {aboutDescription,imageUrl,_id,aboutTitle} = data
              return <AboutComponent key={_id} >
        <Title>About</Title>
        <AboutAndDescription>
 <AboutImageContainer>
     <Image src={imageUrl} alt='about me' width={300} height={300} priority />
 </AboutImageContainer>

        <AboutDescriptionContainer>
             <AboutDescriptionTitle>{aboutTitle}</AboutDescriptionTitle>
             {aboutDescription.map(data => {
                 return data.children.map(datas => {
  return <AboutDescription key={datas._key}>{datas.text}</AboutDescription>
                 })
               
             })}
             
      
        </AboutDescriptionContainer>
       
        </AboutAndDescription>
       
    </AboutComponent>
          }) : <p>Loading...</p>}
 
      </AboutContainer>
   
  )
}
export default About