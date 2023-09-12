import React from 'react';
import {NavBar} from './components/navbar';
import { Map } from './components/Map';
import SlideUp from './components/slideup';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  return (
    <div className='Home'>
      <NavBar />
      <Map />
      <SlideUp />
    </div>
  );
}

export default Home;