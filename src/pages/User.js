import React, { useContext } from 'react';

import { Context } from '../context/Context';
import SubmitButton from '../components/SubmitButton';

export default function User() {
  const { removeAuth } = useContext(Context);

  return (
    <>
      <h1>Usuario</h1>
      <SubmitButton onClick={removeAuth} type="button">
        Cerrar sesión
      </SubmitButton>
    </>
  );
}
