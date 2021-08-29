import React from 'react';
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
