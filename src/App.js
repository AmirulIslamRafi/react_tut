// import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
// import TextForms from './components/TextForms'



function App() {
  return (
  <>
      
    <Navbar company = "TextUtils" aboutCompany="সম্বন্ধে"/>
    {/* <Navbar company = {123} aboutCompany="সম্বন্ধে"/>  */}
    {/* <Navbar/>  */}
    {/* class = className and for = htmlFor */}
     <div className="container mb-3">
       {/* <TextForms heading ="Tell your story "/> */}
       <About/>
     </div>
  </>
  );
}

export default App;
