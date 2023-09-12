import { gql } from '@apollo/client'

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

export const QUERY_SINGLE_FOUNTAIN = gql`
  query fountain($fountainId: ID!) {
    fountain(fountainId: $fountainId) {
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

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
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
      saved {
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
  }
`;