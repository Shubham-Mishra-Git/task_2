import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import List from './Components/List';
import User from './Components/User';
import { NoteProvider } from './NoteContext';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default function App() {
  const [mode , setmode ]= useState('light');

  const togglemode=()=>{
    if(mode==='light')
      setmode('dark');
    else
    setmode('light');
  }
  return (
    <Router>
      <Navbar mode={mode} togglemode={togglemode} />
      <NoteProvider>
        <Routes>
          <Route path="/" element={<List mode={mode} />} />
          <Route path="/user" element={<User mode={mode}/>} />
        </Routes>
      </NoteProvider>
    </Router>
  );
}
