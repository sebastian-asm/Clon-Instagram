import React from 'react';
import { useQuery } from '@apollo/client';

import { getFavs } from '../graphql/queries/getFavs';
import ListOfFavs from '../components/ListOfFavs';
import Seo from '../components/Seo';

export default function Favs() {
  // network-only: para obtener siempre los datos actualizados
  const { data } = useQuery(getFavs, { fetchPolicy: 'network-only' });

  return (
    <>
      <Seo title="Tus favoritos" description="App de fotos para tu mascota" />

      <ListOfFavs favs={data?.favs} />
    </>
  );
}
