import { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
  from  {
    filter: blur(5px);
    opacity: 0;
  }
  to {
    filter: blur(0);
    opacity: 1;
  }
`;

// En caso de no recibir níngun argumento por defecto en un {} vacío
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`;
