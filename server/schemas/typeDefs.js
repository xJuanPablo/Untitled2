const { gql } = require('apollo-server-express');


//User information
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }
  
  type Fountain {
    _id: ID
    location: String
    createdAt: String
  }
  `

module.exports = typeDefs;

//TODO: figure out how to upload pictures