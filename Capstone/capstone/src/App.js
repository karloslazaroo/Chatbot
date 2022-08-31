import React from 'react'
import './App.css';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header} from './containers';
import {Login, Navbar} from './components';


const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
      <Navbar />
      <Login />
  
      </div>
    </div>
  )
}

export default App
