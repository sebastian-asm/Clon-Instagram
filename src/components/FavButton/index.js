import React from 'react';
import PropTypes from 'prop-types';
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

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
