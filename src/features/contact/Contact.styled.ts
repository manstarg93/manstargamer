import { borderMixin, variables } from "@/styles/global";
import styled from "@emotion/styled";
import Link from "next/link";


export const ContactContainer = styled.div`
${borderMixin};
text-align: center;
margin: 0 auto;
padding: 10px;

h2{
   
    padding-bottom: 10px;
}

`
export const EmailLink = styled(Link)`
  text-align: center;
    color: lightblue;
    cursor: pointer;
    border-bottom: .1px solid ${variables.gray};
    padding-bottom: 2px;
`
export const ContactIconContainer = styled.div`



svg{
    width: 1.8rem;
    height: 1.8rem;
    margin: 2rem;

}
`