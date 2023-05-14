import SectionWrapper from "@/component/sectionWrapper/SectionWrapper"
import Title from "@/component/title/Title"


import { Skill, SkillBox, SkillContainer, SkillsContainer, SkillTitle } from "./Skills.styled"
import { mySkillType } from "./skillsType"

import { RefObject } from "react"





interface Iskills {
    allSkills: mySkillType,
    skillRef: RefObject<HTMLDivElement>
}
const Skills = ({allSkills,skillRef}:Iskills) => {


  
  return (
   <SectionWrapper componentRef={skillRef}>
       <Title title="Skills"/>
      
          
               <SkillsContainer >
                  
                 <SkillContainer>
                   
 {allSkills?.flatMap(skill => {
                 const {title, skillList} = skill
                
                  return <SkillBox key={title}>
                    <SkillTitle>
                          {title}
                        </SkillTitle>
                  {skillList.map((mySkillList,index) => {
                    return <Skill key={index}>
                      {mySkillList}
                    </Skill>
                  })}
                      
 
               
                    </SkillBox>
                  
                 })}
                 </SkillContainer>
            
                
                
                 
                  
               </SkillsContainer>
  

  
   </SectionWrapper>
  )
}
export default Skills