import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
export const variables = {
  primary: '#171e29',
  white: '#fff',
  orangered: '#eb4034',
  orange: '#eb6b34',
  gray: '#cccccc',
  black: '#000',
  darkGray: '#333333',
  green: '#134a0b',
  lightgreen: '#1f8c0f',
};

export const device = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1920px',
};

export const boxShadow = (shadow: string) => `0 0.1rem 0.1rem ${shadow}`;



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
