
import {TitleContainer} from './Title.styled'
interface ITitle extends React.ComponentPropsWithoutRef<'h1'>{

}

const Title = ({children}:ITitle) => {
  return (
    <TitleContainer>{children}</TitleContainer>
  )
}
export default Title