const { AuthenticationError } = require('apollo-server-express');
// TODO: create models to import
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    fountains: async () => {
      return await Fountain.find();
    }
  }
}

module.export = resolvers;