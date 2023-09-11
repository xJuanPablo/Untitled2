const { gql } = require('apollo-server-express');


//User information
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    fountains: [Fountain]!
    saved: [Fountain]!
  }
  
  type Fountain {
    _id: ID
    lat: Int
    long: Int
    address: String
    place: String
    city: String
    state: String
    datePosted: String
    image: String
    postAuthor: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    fountains: [Fountain]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addFountain(address: String!, image: String!): Fountain
  }
`

module.exports = typeDefs;

//TODO: figure out how to upload pictures