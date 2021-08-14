import React from 'react';
import { useQuery } from '@apollo/client';

import { PhotoCard } from '../PhotoCard';
import { getPhotos } from '../../graphql/queries/getPhotos';

export const ListOfPhotoCards = ({ categoryId }) => {
  const variables = { variables: { categoryId } };
  const { data, loading, error } = useQuery(getPhotos, variables);

  if (loading) return <h3>Cargando...</h3>;
  if (error) return <h3>Error al obtener los datos.</h3>;

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
