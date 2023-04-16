import { ButtonContainer } from "./Button.styled"

interface IButton extends React.ComponentPropsWithoutRef<'button'>{

}

const Button = ({children}:IButton) => {
  return (
   <ButtonContainer>{children}</ButtonContainer>
  )
}
export default Button