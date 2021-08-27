import React from 'react';

import { Form, Input, Button, Title } from './styles';
import useInputValue from '../../hooks/useInputValue';

export default function UserForm({ onSubmit, title }) {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={email.onChange}
          value={email.value}
          type="text"
          placeholder="Email"
        />
        <Input
          onChange={password.onChange}
          value={password.value}
          type="password"
          placeholder="Password"
        />
        <Button type="submit">{title}</Button>
      </Form>
    </>
  );
}
