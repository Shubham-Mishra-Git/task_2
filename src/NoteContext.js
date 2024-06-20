import React, { useState } from 'react';
import { createContext } from 'react';

export const NoteContext = createContext();

export const NoteProvider=({children})=> {

const [user , setuser]=useState([]);


  return (
    <NoteContext.Provider value={ {user , setuser }}>
        {children}
    </NoteContext.Provider>
  );

 
};
