import React from 'react';

import { Form, Input, Title, Error } from './styles';
import SubmitButton from '../SubmitButton';
import useInputValue from '../../hooks/useInputValue';

export default function UserForm({ disabled, error, onSubmit, title }) {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          onChange={email.onChange}
          value={email.value}
          disabled={disabled}
          type="text"
          placeholder="Email"
        />

        <Input
          onChange={password.onChange}
          value={password.value}
          disabled={disabled}
          type="password"
          placeholder="Password"
        />

        <SubmitButton type="submit" disabled={disabled}>
          {title}
        </SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
}
