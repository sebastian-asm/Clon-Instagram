import React, { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { useLocation } from 'wouter';

import { login } from '../graphql/mutations/login';
import { register } from '../graphql/mutations/register';
import { Context } from '../context/Context';
import UserForm from '../components/UserForm';

export default function NotUser() {
  const { activateAuth } = useContext(Context);
  const [, setLocation] = useLocation();

  const [
    registerMutation,
    { loading: loadingRegister, error: errorRegister },
  ] = useMutation(register);

  const [
    loginMutation,
    { loading: loadingLogin, error: errorLogin },
  ] = useMutation(login);

  const onSubmitRegister = ({ email, password }) => {
    const variables = { variables: { input: { email, password } } };
    registerMutation(variables)
      .then(({ data }) => {
        const { signup } = data;
        activateAuth(signup);
        setLocation('/');
      })
      .catch(console.log);
  };

  const onSubmitLogin = ({ email, password }) => {
    const variables = { variables: { input: { email, password } } };
    loginMutation(variables)
      .then(({ data }) => {
        const { login } = data;
        activateAuth(login);
        setLocation('/');
      })
      .catch(console.log);
  };

  return (
    <>
      <UserForm
        onSubmit={onSubmitRegister}
        error={errorRegister && 'El usuario ya esta registrado.'}
        disabled={loadingRegister}
        title="Registrarse"
      />

      <UserForm
        onSubmit={onSubmitLogin}
        error={errorLogin && 'Credenciales inválidas.'}
        disabled={loadingLogin}
        title="Iniciar sesión"
      />
    </>
  );
}
