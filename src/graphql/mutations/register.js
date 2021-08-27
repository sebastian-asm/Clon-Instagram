import { gql } from '@apollo/client';

export const register = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;
