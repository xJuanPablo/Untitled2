import {NavBar} from './components/navbar';
import { Signup } from './components/signup';
// import { Home } from './components/home';
// import React, { useState } from "react";
import SlideUp from './components/slideup';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Signup />
      <SlideUp />
    </div>
  );
}

export default App;
