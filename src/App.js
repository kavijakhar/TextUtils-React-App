import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //wether dark mode is enable or not ye hme btata hai
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(84 94 118)';
      showAlert("Dark mode is enabled now", "succes")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode is enabled now", "success")
    }
  }
  return (
   
      <Router>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>

            <Route path="/about" element={<About/>}/>
            <Route path="/"  element={ <TextForm showAlert={showAlert} heading='Text area-   write here something' mode={mode} />}/>
        
        </Routes>
      </Router>

  );
}
export default App;
