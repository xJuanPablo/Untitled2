const jwt = require('jsonwebtoken');

//TODO: create secret
const secret = '';
//TODO: create time duration for expiration
const expiration ='';

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
