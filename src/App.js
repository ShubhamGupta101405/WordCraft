import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      }, 1500);
  }
  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="WordCraft" aboutText="About WordCraft" mode={mode} toggleMode={toggleMode}/>
      <Alert alert= {alert}/>
      <div className="container my-3">
      {/* <Routes> */}
      {/* <Route exact path="/about" element={<About />}> */}
            {/* </Route> */}
            {/* <Route exact path="/" element={<TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}> */}
            <TextForm heading="Try WordCraft - Word Counter, Character Counter, Text to Speech"  mode={mode} showAlert={showAlert} />
            {/* </Route> */}
        {/* </Routes> */}
     
      {/* <About/> */}
      </div>
      
      {/* </Router> */}
    </>
  );
}

export default App;
