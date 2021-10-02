// import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextForms from './components/TextForms'
import React, { useState } from 'react'
import Alert from './components/Alert'
// Adding react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from"react-router-dom"



function App() {

  const [mode, setMode] = useState('light')
  // const [btnMode, setBtnMode] = useState('light')
 const [alert, setalert] = useState(null)
 const showAlert = (message, type)=>{
    setalert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
 }


  const toggleMode= ()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor ='#171a1d'
      document.body.style.color ='white'
      // document.getElementById('myBox').style.backgroundColor ='#212529'
      // document.getElementById('myBox').style.color ='white'
      // setBtnMode('warning')
      showAlert("Dark Mode is On", "light")
      document.title ='TextUtil -- Dark Mode --'
      // setInterval(() => {
      //   document.title ='TextUtil --$ Is Amezing $--'
      // }, 2000);
      // setInterval(() => {
      //   document.title ='Install Our App Now'
      // }, 1500);
    }
    else{
      setMode('light')
      // setBtnMode('light')
      document.body.style.backgroundColor ='white'
      document.body.style.color ='black'
      // document.getElementById('myBox').style.backgroundColor ='#989eab'
      // document.getElementById('myBox').style.color = 'black'
      showAlert("Light Mode is On", "info")
      document.title ='TextUtil -- Light Mode --'
      // setInterval(() => {
      //   document.title ='Light'
      // }, 1500);
    }
  }

  return (
  <>
      <Router>
    <Navbar company = "রাফির নোটবই" aboutCompany="সম্বন্ধে" mode={mode} toggleMode={toggleMode}/>
    <Alert alert ={alert}/>
    {/* <Navbar company = {123} aboutCompany="সম্বন্ধে"/>  */}
    {/* <Navbar/>  */}
    {/* class = className and for = htmlFor */}
     <div className="container mb-3">
       <Switch>
          <Route exact path="/about">
            <About/>
            
          </Route>
          <Route exact path="/">
          <TextForms heading ="Tell your story " mode={mode} showAlert={showAlert}/>
          </Route>
        </Switch>
     </div>
       </Router>
  </>
  );
}

export default App;
