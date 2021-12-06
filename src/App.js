import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, { useState } from 'react'
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "black";
      document.title = "Textutils-Dark Mode"
      showAlert("Dark mode has been enabled", 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.title = "Textutils-Light Mode"
      showAlert("Light mode has been enabled", 'success');
    }
  }
  return (
    <>  {/* Jsx framwork tko include multiple tag at same level*/}

      {/* <Router>
        <Navbar mode={mode} toggleMode={toggleMode} title="Textutils" />
        <Alert alert={alert} />

        <div className="container my-3">


          <Routes>
            <Route exact path="/" element={<Textform showAlert={showAlert} mode={mode} heading="Enter text to be analyzed.." />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router> */}
      {/* reacts uses partial matching for path and thus imp to specifiy exact path if we want same */}

      <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils" />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textform showAlert={showAlert} mode={mode} heading="Enter text to be analyzed.." />
      </div>
    </>
  );
}

export default App;
