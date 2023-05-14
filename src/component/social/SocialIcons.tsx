import Link from 'next/link'
import { socialIcons, socialIconType } from './socialData'
import { SocialIconsContainer } from './SocialIcons.styled.'

interface ISocial {
  mySocialIcons?: socialIconType
}

const SocialIcons = ({mySocialIcons}:ISocial) => {
  return (
    <SocialIconsContainer>
        {mySocialIcons?.map((icons, index) => {
            const {title, Icon, link} = icons
            return <Link key={title} href={link} target='_blank'> <Icon key={title}/>  
            </Link> 
        })}
    </SocialIconsContainer>
  )
}
export default SocialIcons