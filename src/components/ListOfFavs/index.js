import React from 'react';
import { Link } from 'wouter';

import { Grid, Item, Image } from './styles';

export default function ListOfFavs({ favs = [] }) {
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
