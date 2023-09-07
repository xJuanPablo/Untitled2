//! file is using Node.js, Express, and Apollo Server to create an API with GraphQL

//These lines are importing models
//Express creates a web server
const express = require('express');
// This sets a server for GraphQL
const { ApolloServer } = require('apollo-server-express');
// This handles file paths
const path = require('path');
//This gets the custom middleware used for authentication located at './utils/auth'
const { authMiddleware } = require('./utils/auth');

// This exports the GraphQL schema and database configuration
const { typeDefs, resolvers } = require('./schemas');
//This imports a database connection
const db = require('./config/connection');

// This defines the port for the server
const PORT = process.env.PORT || 3001;
// This creates an instance of express
const app = express();

//This configures the ApolloServer with the imported schema and custome authentication middleware
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

//This sets up the Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

//conditional reasoning for serving static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// sets up route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// This code sends the 'index.html' file as a response when a request is made to the root URL.
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer();
