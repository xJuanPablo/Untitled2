import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import {NavBar} from './components/navbar';
// import { Home } from './components/home';
// import React, { useState } from "react";
import { Map } from './components/Map';
import SlideUp from './components/slideup';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
  url: '/graphql',
  cache : new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client = {client}>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path = "/components"
              element = {<NavBar />}
            />
            <Route
              path = "/components"
              element = {<Map />}
            />
            <Route 
              path = "/components"
              element = {<SlideUp />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
    
)}

export default App;
// import {NavBar} from './components/navbar';
// import { Signup } from './components/signup';
// // import { Home } from './components/home';
// // import React, { useState } from "react";
// import { Map } from './components/Map';
// import SlideUp from './components/slideup';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       {/* was testing map :D */}
//       <Map/>
//       {/* <Signup /> */}
//       <SlideUp />
//     </div>
//   );
// }

// export default App;