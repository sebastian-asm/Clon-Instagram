import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import { Category } from '../Category';
import { List, Item } from './styles';
import { getCategories } from '../../graphql/queries/getCategories';

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { data, loading, error } = useQuery(getCategories);

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== -newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed]);

  const renderList = (isFixed) => (
    <List isFixed={isFixed}>
      {data.categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  );

  if (loading) return <h3>Cargando...</h3>;
  if (error) return <h3>Error al obtener los datos.</h3>;

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  );
};
