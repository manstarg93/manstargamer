import { variables } from "@/styles/global";
import styled from "@emotion/styled";

export const ButtonContainer = styled.button`
cursor: pointer;
outline: none;
border: solid .5px ${variables.gray};
color: ${variables.gray};
background-color: transparent;
padding: 10px;
border-radius: 5px;
width: max-content;

&:hover{
    background-color: ${variables.white};
    color: ${variables.darkGray};
}
`