// import logo from './logo.svg';
// import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextForms from './components/TextForms'
import React, { useState } from 'react'




function App() {

  const [mode, setMode] = useState('light')
  // const [btnMode, setBtnMode] = useState('light')
  const toggleMode= ()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor ='#171a1d'
      document.body.style.color ='white'
      // document.getElementById('myBox').style.backgroundColor ='#212529'
      // document.getElementById('myBox').style.color ='white'
      // setBtnMode('warning')
    }
    else{
      setMode('light')
      // setBtnMode('light')
      document.body.style.backgroundColor ='white'
      document.body.style.color ='black'
      // document.getElementById('myBox').style.backgroundColor ='#989eab'
      // document.getElementById('myBox').style.color = 'black'
    }
  }

  return (
  <>
      
    <Navbar company = "রাফির নোটবই" aboutCompany="সম্বন্ধে" mode={mode} toggleMode={toggleMode}/>
    {/* <Navbar company = {123} aboutCompany="সম্বন্ধে"/>  */}
    {/* <Navbar/>  */}
    {/* class = className and for = htmlFor */}
     <div className="container mb-3">
       <TextForms heading ="Tell your story " mode={mode}/>
       {/* <About/> */}
     </div>
  </>
  );
}

export default App;
