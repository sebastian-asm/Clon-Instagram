import React from 'react';
import { useMutation } from '@apollo/client';

import { register } from '../graphql/mutations/register';
import UserForm from '../components/UserForm';
import Context from '../context/Context';

export default function NotUser() {
  const [registerMutation] = useMutation(register);

  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        const onSubmit = ({ email, password }) => {
          const variables = { variables: { input: { email, password } } };
          registerMutation(variables).then(activateAuth);
        };

        return (
          <>
            <UserForm onSubmit={onSubmit} title="Registrarse" />
            <UserForm onSubmit={activateAuth} title="Iniciar sesión" />
          </>
        );
      }}
    </Context.Consumer>
  );
}
