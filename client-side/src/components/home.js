import React from 'react';
// import {NavBar} from './components/navbar';
import { Map } from './Map';
import SlideUp from './slideup';
// import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  return (
    <div className='Home'>
  
      <Map />
      <SlideUp />
    </div>
  );
}

export default Home;