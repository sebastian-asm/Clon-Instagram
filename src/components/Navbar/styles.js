import styled from 'styled-components';
import { Link as LinkRouter } from 'wouter';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fcfcfc;
  border-top: 1px solid #e0e0e0;
  bottom: 0;
  height: 50px;
  left: 0;
  margin: 0 auto;
  max-width: 500px;
  position: fixed;
  right: 0;
  width: 100%;
  z-index: 2;
`;

export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;
`;
