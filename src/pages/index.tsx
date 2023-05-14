
import { Inter } from 'next/font/google'
import {createClient} from 'next-sanity'
import HeadComponent from '@/component/HeadComponent'
import Layout from '@/Layout/Layout'
import Intro from '@/features/intro/Intro'
import About from '@/features/about/About'
import { introType } from '@/features/intro/introType'
import { fetchAbout, fetchIntro, fetchPortfolio, fetchSkills } from '@/lib/sanityFetch'
import { aboutType } from '@/features/about/aboutType'
import Skills from '@/features/skills/Skills'
import { mySkillType, skills, skillsType } from '@/features/skills/skillsType'
import Portfolio from '@/features/portfolio/Portfolio'
import { portfolioType } from '@/features/portfolio/portfolioType'
import Contact from '@/features/contact/Contact'
import { useRef } from 'react'


  interface IIndex {
    intro: introType,
    about: aboutType,
    allSkills: mySkillType,
    portfolio: portfolioType
  }

export default function Home({intro,about,allSkills,portfolio}:IIndex) {

  const aboutRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const skillRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  return (
    <>
    <HeadComponent/>
     <Layout 
     aboutRef={aboutRef}
     portfolioRef={portfolioRef} 
     skillRef={skillRef} 
     contactRef={contactRef}>
      <Intro intro={intro}/>
        <Portfolio portfolio={portfolio} portfolioRef={portfolioRef}/>
       <About about={about} aboutRef={aboutRef}/>
      
       <Skills allSkills={allSkills} skillRef={skillRef}/>
       <Contact contactRef={contactRef}/>
     </Layout>
    </>
  )
}




export async function getStaticProps() {
  const client = createClient({
  projectId: "o385dqdh",
  dataset: "production",
  apiVersion: "2023-04-17",
  useCdn: false
});
const intro = await fetchIntro(client)
const portfolio = await fetchPortfolio(client)
const about = await fetchAbout(client)

const allSkills = skills

  return{
    props: {
intro,
about,
allSkills,
portfolio
    }
  }
}