import { gql } from '@apollo/client'


export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      fountains
      saved
    }
  }
`;

export const QUERY_FOUNTAINS = gql`
query fountains {
  fountains {
    _id
    lat
    lng
    address
    place
    city
    state
    datePosted
    img
    postAuthor
  }
}
`;
