import { gql } from '@apollo/client';

export const getFavs = gql`
  query getFavs {
    favs {
      id
      liked
      likes
      src
      userId
    }
  }
`;
