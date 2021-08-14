import { gql } from '@apollo/client';

export const getCategories = gql`
  query getCategories {
    categories {
      id
      cover
      emoji
      path
      name
    }
  }
`;
