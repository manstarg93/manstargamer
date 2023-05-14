import { ButtonContainer } from "./Button.styled"

interface IButton extends React.ComponentPropsWithoutRef<'button'>{
onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({children,onClick}:IButton) => {
  return (
   <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
  )
}
export default Button