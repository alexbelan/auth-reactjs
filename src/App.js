import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Main from './components/Main';
import AppContext from './AppContext';
import { fieldsBase } from './config';

function App() {
  const [numScreen, setNumScreen] = useState(0)
  const [formData, setFormData] = useState(fieldsBase)
  const [nextBtn, setNextBtn] = useState(false)

  return (
    <AppContext.Provider value={{numScreen, setNumScreen, formData, setFormData, nextBtn, setNextBtn}} >
      <Main />
    </AppContext.Provider>
  );
}

export default App;
