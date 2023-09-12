import React from 'react';
import {NavBar} from './navbar';
import { Map } from './Map';
import SlideUp from './slideup';
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