import React from 'react';
import { useQuery } from '@apollo/client';

import { PhotoCard } from '../PhotoCard';
import { getSinglePhoto } from '../../graphql/queries/getSinglePhoto';

export const PhotoCardWithQuery = ({ detailId }) => {
  const variables = { variables: { id: detailId } };
  const { data, loading, error } = useQuery(getSinglePhoto, variables);

  if (loading) return <h3>Cargando...</h3>;
  if (error) return <h3>Error al obtener los datos.</h3>;

  return <PhotoCard {...data.photo} />;
};
