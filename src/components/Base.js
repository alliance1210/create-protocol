import Navbar from './Navbar/Navbar'
import React,{useEffect,useState } from 'react'
import logo from '../Assets/Images/logo.png'

function getWindowSize() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

const Base = ({children}) => {
  
  

  
  return (
    <div>
        <Navbar/>
        
        
        {children}        

    </div>
  )
}

export default Base