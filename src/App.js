
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'

import React, { useState } from 'react'
import {
  HashRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

function App() {

  const [mode,newMode]=useState('light')
  const [alert,setAlert]=useState(null)
  // const [txt,setTxt]=useState('');
  const showAlert=(mssg,type)=>{
    setAlert({
      mssg:mssg,
      type:type

    })
    setTimeout(() => {
      setAlert(null)
      
    },1200);
  }
  const toggle=()=>{
    if(mode==='light')
    {
      newMode('dark')
      document.body.style.backgroundColor='#1C1B1B'
      showAlert("Dark Mode has been enabled",'success')
      document.title="TextMorpher-Dark Mode"
      // setInterval(()=>{
      //   document.title="TextMorpher"
      // },2000)
      // setInterval(()=>{
      //   document.title="Please do install"
      // },1500);


    }
    else{
      newMode('light')
      document.body.style.backgroundColor="white"
      showAlert("Light Mode has been enabled",'success')
      document.title="TextMorpher-Light Mode"



    }
    
  }

 
  return (
    <>
    <Router>
    <Navbar  title="TextMorpher" about="About" toggle={toggle} mode={mode}/>
    

    <Alert alert={alert} />
    <div className="container my-5">
      {/* exact is must because reatc uses partial mapping so putting exact reinforces it to match exactly */}
    <Routes>
        <Route exact path="/" element={<TextForm funct={showAlert} title="Paste/Enter the text" mode={mode}  />
} />
        <Route exact path="/about" element={ <About mode={mode} />} />
      </Routes>
   
    </div>
    </Router>
    </>
  );
}

export default App;
