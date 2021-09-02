import React, { memo } from 'react';

import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';

function HomePage({ categoryId }) {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </>
  );
}

// memo puede recibir las props anterior y compararlas con nuevos datos
// y volver a renderizar el componente en caso de nuevos cambios
const Home = memo(HomePage, (prevProps, props) => {
  // En caso de tener las mismas id no se volverá a renderizar
  return prevProps.categoryId === props.categoryId;
});

export default Home;
