//instance of express
const express = require('express');
//Object pulled  from apollo-server-express
const { ApolloServer } = require('apollo-server-express');
// Allows us to switch route handlers
const path = require('path');
//TODO: authentication middleware
const { authMiddleware } = require('./utils/auth');


const db = require('./config/connection')

const PORT = process.env.PORT || 3001;
const app = express();




app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//! Read note
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Route for client side server'));
});