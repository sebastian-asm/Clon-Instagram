import styled, { css } from 'styled-components';

import { fadeIn } from '../../styles/animation';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;

  /* Comprobando si existe la propiedad isFixed en el componente */
  ${(props) =>
    props.isFixed &&
    css`
      ${fadeIn()}
      background-color: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 400px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -20px;
      transform: scale(0.5);
      z-index: 1;
    `}

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  padding: 0 8px;
`;
