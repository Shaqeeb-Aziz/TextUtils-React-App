import './App.css';
import About from './Components/About';
import Navbar from "./Components/Navbar";
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode ('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "Sucsess");
    }
    else {
      setMode ('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Sucsess");
    }
  }

  return (
    <>
    <Router>
    <Navbar title="My App" about="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path='/about'
           element= {<About mode={mode} />} />
          <Route path='/'
          element = {<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
