import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import  Aos  from 'aos';
import Expertise from './Components/Expertise';

function App() {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
    <Header/>
    <Expertise/>
    </>
  );
}

export default App;
