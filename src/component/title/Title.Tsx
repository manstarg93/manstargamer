
import {TitleContainer} from './Title.styled'
interface ITitle {
title: string
}

const Title = ({title}:ITitle) => {
  return (
    <TitleContainer>{title}</TitleContainer>
  )
}
export default Title