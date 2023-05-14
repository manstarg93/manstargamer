
export type skillsType = {
  _id:string,
  skills: string[]  
}[]

export type currentSkillType = {
    title: string,
    skill: string[]
}[]

export type mySkillType = [
  {title: 'string',
  skillList: string[]
}
]

export const skills = [
  {title: 'Programming',
  skillList: ['React','Typescript','NextJs','Redux','EmotionJs']
},

{title: 'Key Skills',
  skillList: ['Team Player','Communication','Consistency','Problem Solving','Time Management','Upskilling']
},
{title: 'Hobbies',
  skillList: ['Mixed Martial Arts','Gaming','Family','Travelling','Programming']
},

]