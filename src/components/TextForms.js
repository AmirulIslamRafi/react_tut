import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForms(props) {
  const clear = ()=> {
    
    if (text === "") {
      props.showAlert("Nothing to clear","danger")
    }
    else{
      props.showAlert("Deleted","success")
      setText("")
    }
  };
  

  const copy = ()=> {
    // using js for use the selection funcion
    // console.log('I am a copy');
    let text = document.getElementById('myBox')
    text.select()
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied","success")
    
    
    //one line code
    // navigator.clipboard.writeText(text)
  };
  const extraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Space are Removed","success")
  }

  const handleUpClick = ()=> {
    // let up = text.toUpperCase();
    setText(text.toUpperCase())
    props.showAlert("Changed To Uppercase","success")
  };
  const handleLwrClick = ()=> {
    // let upperCase = text.toLowerCase();
    setText(text.toLowerCase());
    // console.log('Button is clicked' + " " + text);
    // setText("It's your story"+" '"+text +"'");
    props.showAlert("Changed To Lowercase","success")
  };
  const handleOnChange = (event) => {
    // console.log('Text area just changed');
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Some Text Here");

  // text = "newText";  Wrong Way to change the state
  // setText("newText");
  return (
    <>
  <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} style={{
        backgroundColor: props.mode==='dark'?'black':'#c6cfd5', color: props.mode==='dark'?'white':'black'
      }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} fw-bold m-2`} onClick={handleUpClick}>
        Convert To UPPERCASE!
      </button>
      <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} fw-bold m-2 `} onClick={handleLwrClick}>
        Convert To lowercase!
      </button>
      <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} fw-bold m-2 `} onClick={copy}>
      <i className="fa fa-clone fa-2x"><p className="fs-6 my-0">clone</p></i>
      </button>
      <button className={`btn btn-outline-${props.mode==='light'?'dark':'light'} fw-bold m-2 `}  onClick={extraSpace}>
      <i className="fa fa-close"><p className="fs-6 my-0">remove space</p></i>
      </button>
      <button className="btn btn-danger m-2" onClick={clear}>
        Clear
      </button>
    </div>
  </div>
  <div className="container">
    <h1>Your Text Summary</h1>
    <p><span className="fw-bold" >{text.split(" ").length} </span> Words <span className="fw-bold" >{text.length - text.split(" ").length +1}</span> Character </p>
    <p>Need <span className="fw-bold" > {0.008 * text.split(" ").length} </span> minutes to Read (Slow Reader) </p>
    <h1>Preview</h1>
    <p className="font-monospace text-capitalize border border-dark border-3 fs-4 text-wrap fw-bold p-3 rounded">{text}</p>
  </div>
  </>
  )

};

TextForms.propTypes = {
  heading: PropTypes.string.isRequired
};
