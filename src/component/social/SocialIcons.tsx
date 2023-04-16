import Link from 'next/link'
import { socialIcons } from './socialData'
import { SocialIconsContainer } from './SocialIcons.styled.'


const SocialIcons = () => {
  return (
    <SocialIconsContainer>
        {socialIcons.map((icons, index) => {
            const {title, Icon, link} = icons
            return <Link key={title} href={link} > <Icon key={title}/>  
            </Link> 
        })}
    </SocialIconsContainer>
  )
}
export default SocialIcons