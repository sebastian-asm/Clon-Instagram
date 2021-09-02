import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'wouter';

import { Grid, Item, Image } from './styles';

export default function ListOfFavs({ favs = [] }) {
  console.log(favs);

  return (
    <Grid>
      {favs.map((fav) => (
        <Link key={fav.id} href={`/detail/${fav.id}`}>
          <Item>
            <Image src={fav.src} />
          </Item>
        </Link>
      ))}
    </Grid>
  );
}

ListOfFavs.propTypes = {
  // Especificando que lo recibido como prop sea un array de object
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    })
  ),
};
