import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
export const variables = {
  primary: '#171e29',
  white: '#fff',
  orangered: '#eb4034',
  orange: '#eb6b34',
  gray: '#E9E9E9',
  black: '#000',
  darkGray: '#0a1121',
  darkgraylight: '#4d4d4d',
  green: '#134a0b',
  lightgreen: '#1f8c0f',
  blue: '#1d546f'
};

export const device = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1920px',
};

export const boxShadow = (shadow: string) => `0 0.1rem 0.1rem ${shadow}`;

export const borderMixin = css`
border: solid .5px ${variables.gray};
border-radius: 5px;
background: linear-gradient(262deg, transparent 0%, rgba(29,84,111,0.3837753510140406) 80%);

overflow: hidden;
`

export const slideAnimation = keyframes`
0%{
 transform: translate(-100%);
}
50%{
transform: translate(-50%);
}
100%{
   transform: translate(0%);
}
`;

export const slideAnimationleft = keyframes`
0%{
 transform: translate(100%);
}
50%{
transform: translate(50%);
}
100%{
   transform: translate(0);
}
`;
