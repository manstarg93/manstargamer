
import { IconType } from 'react-icons'
import {ImFacebook, ImInstagram,ImGithub,ImGoogle,ImLinkedin,ImMail}from 'react-icons/im'

export const socialIcons = [
    {title: 'google', Icon: ImMail,link: 'mailto:manstarg93@gmail.com'  },
  {title: 'linkedin', Icon: ImLinkedin,link: 'https://www.linkedin.com/in/samuel-simon-a23900189/'  },
    {title: 'instagram', Icon: ImInstagram,link: 'https://www.instagram.com/sam_simon_mma/' },
    {title: 'github', Icon: ImGithub,link: 'https://github.com/manstarg93' },
   
     {title: 'facebook', Icon: ImFacebook,link: '#'  }
    
]

export type socialIconType = {
title: string,
Icon: IconType,
link: string
}[]