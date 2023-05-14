import {createClient} from 'next-sanity'



export const fetchIntro = async(client) => {
const intro = await client.fetch(`*[_type == "intro"]{
  _id,
  occupation,
  typeText1,
  typeText2,
  "imageUrl": introImage.asset->url
}`)

return intro
}
export const fetchAbout = async(client) => {
const about = await client.fetch(`*[_type == "about"]{
  _id,
  aboutTitle,
  aboutDescription,
  "imageUrl": aboutImage.asset->url
}`)



return about
}

export const fetchSkills = async(client) => {
const skills = await client.fetch(`*[_type == "skills"]{
  _id,
  skills

}`)

return skills
}

export const fetchPortfolio = async(client) => {
const about = await client.fetch(`*[_type == "portfolio"] {
  _id,
  portfolioTitle,
  portfolioLink,
  code,
  features,
  portfolioDescription,
  "imageUrl": image.asset->url,

} | order(portfolioTitle asc)` )



return about
}

