import { AboutAndDescription,  AboutDescription, AboutDescriptionContainer, AboutDescriptionTitle, AboutImageContainer } from "./About.styled"


import Image from "next/image"
import { aboutType } from "./aboutType"
import SectionWrapper from "@/component/sectionWrapper/SectionWrapper"
import { RefObject, useEffect, useRef } from "react"
import Title from "@/component/title/Title"

import { useSelector, useDispatch } from 'react-redux'
// import { getAboutRef } from "@/store/uiSlice"


interface IAbout {
    about: aboutType
    aboutRef: RefObject<HTMLDivElement>
}
const About = ({about,aboutRef}:IAbout) => {


    
    const dispatch = useDispatch()
//    useEffect(() => {
//     dispatch(getAboutRef(aboutRef))
//    },[])
    
  return (
      <SectionWrapper componentRef={aboutRef}>
           <Title title="About"/>
          {about ? about.map(data => {
              const {aboutDescription,imageUrl,_id,aboutTitle} = data
              return <AboutAndDescription  key={_id}>
                   <AboutDescriptionContainer>
             <AboutDescriptionTitle>{aboutTitle}</AboutDescriptionTitle>
             {aboutDescription.map(data => {
                 return data.children.map(datas => {
  return <AboutDescription key={datas._key}>{datas.text}</AboutDescription>
                 })
               
             })}
             
      
        </AboutDescriptionContainer>
 <AboutImageContainer>
     <Image src={imageUrl} alt='about me' width={400} height={400} priority />
 </AboutImageContainer>

       
       
        </AboutAndDescription>
       
 
          }) : <p>Loading...</p>}
 
      </SectionWrapper>
   
  )
}
export default About