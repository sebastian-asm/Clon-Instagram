import React from 'react';

import { HiOutlineThumbUp, HiThumbUp } from 'react-icons/hi';

import { Button } from './styles';

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? HiThumbUp : HiOutlineThumbUp;

  return (
    <Button onClick={onClick}>
      <Icon size="25" />
      {likes} likes
    </Button>
  );
};
