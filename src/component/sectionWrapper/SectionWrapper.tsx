import { RefObject } from "react"
import { SectionWrapperContainer } from "./SectionWrapper.styled"

interface ISectionWrapper extends React.ComponentPropsWithoutRef<'section'>{
componentRef?: RefObject<HTMLDivElement>
}

const SectionWrapper = ({children,componentRef}:ISectionWrapper) => {
  return (
   <SectionWrapperContainer ref={componentRef}>{children}</SectionWrapperContainer>
  )
}
export default SectionWrapper