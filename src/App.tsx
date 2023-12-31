import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import  Aos  from 'aos';
import Expertise from './Components/Expertise';
import TopBrands from './Components/TopBrands';
import About from './Components/About';

function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
    <Header/>
    <Expertise/>
    <TopBrands/>
    <About/>
    </>
  );
}

export default App;
