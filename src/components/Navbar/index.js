import React from 'react';
import { useRoute } from 'wouter';
import { HiOutlineHome, HiOutlineStar, HiOutlineUser } from 'react-icons/hi';

import { Nav, Link } from './styles';

const SIZE = '25';
const COLOR = '#888';

export const Navbar = () => {
  const ActiveLink = (props) => {
    const [isActive] = useRoute(props.href);
    return (
      <Link {...props}>
        <a className={isActive ? 'active' : ''}>{props.children}</a>
      </Link>
    );
  };

  return (
    <Nav>
      <ActiveLink href="/">
        <HiOutlineHome size={SIZE} color={COLOR} />
      </ActiveLink>
      <ActiveLink href="/favs">
        <HiOutlineStar size={SIZE} color={COLOR} />
      </ActiveLink>
      <ActiveLink href="/user">
        <HiOutlineUser size={SIZE} color={COLOR} />
      </ActiveLink>
    </Nav>
  );
};
