import { variables } from "@/styles/global";
import styled from "@emotion/styled";


export const SocialIconsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

align-items: center;

svg{
    fill: ${variables.gray};
    width: 1rem;
    height: 1rem;
    margin: 0.5rem;

    cursor: pointer;

    &:hover{
        fill: ${variables.orange};
    }
}
`

