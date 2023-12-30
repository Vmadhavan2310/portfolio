import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import  Aos  from 'aos';

function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
    <Header/>
    <About/>
    </>
  );
}

export default App;
