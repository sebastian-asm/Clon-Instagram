import React from 'react';
import { useQuery } from '@apollo/client';

import { getFavs } from '../graphql/queries/getFavs';
import ListOfFavs from '../components/ListOfFavs';

export default function Favs() {
  // network-only: para obtener siempre los datos actualizados
  const { data } = useQuery(getFavs, { fetchPolicy: 'network-only' });

  return <ListOfFavs favs={data?.favs} />;
}
