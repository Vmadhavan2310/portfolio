import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import  Aos  from 'aos';
import Expertise from './Components/Expertise';
import TopBrands from './Components/TopBrands';
import About from './Components/About';
import Experience from './Components/Experience';
import Contact from './Components/Contact';

function App() {
  const AOS_timing=1000;
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <>
    <Header AOS_timing={AOS_timing}/>
    <Expertise AOS_timing={AOS_timing}/>
    <Experience AOS_timing={AOS_timing}/>
    <TopBrands AOS_timing={AOS_timing}/>
    <Contact AOS_timing={AOS_timing}/>
    </>
  );
}

export default App;
