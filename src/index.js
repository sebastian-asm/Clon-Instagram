import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import App from './App';
import { Provider } from './context/Context';

const httpLink = createHttpLink({
  uri: 'https://petgram-react-avanzado-omega.vercel.app/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  onError: onError(({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      sessionStorage.removeItem('token');
      location.href = '/';
    }
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('app')
);
