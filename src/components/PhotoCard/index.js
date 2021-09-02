import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'wouter';
import { useMutation } from '@apollo/client';

import { FavButton } from '../FavButton';
import { toggleLike } from '../../graphql/mutations/toggleLike';
import useNearScreen from '../../hooks/useNearScreen';

import { Article, ImgWrapper, Img } from './styles';

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const [toggleLikeMutation] = useMutation(toggleLike);

  const handleFavClick = () => {
    const variables = { variables: { input: { id } } };
    toggleLikeMutation(variables);
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  // Validando que likes sea un número pero positivo
  likes: (props, propName, componentName) => {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error(`${propName} debe estar definido`);
    }
    if (propValue < 0) {
      return new Error(`${propName} el valor debe ser mayor a 0`);
    }
  },
};
