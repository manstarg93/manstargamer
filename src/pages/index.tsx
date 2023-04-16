
import { Inter } from 'next/font/google'
import {createClient} from 'next-sanity'
import HeadComponent from '@/component/HeadComponent'
import Layout from '@/Layout/Layout'
import Intro from '@/features/intro/Intro'
import About from '@/features/about/About'
import { introType } from '@/features/intro/introType'
import { fetchAbout, fetchIntro } from '@/lib/sanityFetch'
import { aboutType } from '@/features/about/aboutType'

const inter = Inter({ subsets: ['latin'] })

  interface IIndex {
    intro: introType,
    about: aboutType
  }

export default function Home({intro,about}:IIndex) {

  return (
    <>
    <HeadComponent/>
     <Layout>
      <Intro intro={intro}/>
       
       <About about={about}/>
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
const about = await fetchAbout(client)
  return{
    props: {
intro,
about
    }
  }
}