import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForms(props) {
    const handleUpClick = ()=>{
        let upperCase = text.toUpperCase();
        setText(upperCase);
        // console.log('Button is clicked' + " " + text);
        // setText("It's your story"+" '"+text +"'");
    }
    const handleOnChange = (event)=> {
        console.log('Text area just changed');
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Some Text Here');

    // text = "newText";  Wrong Way to change the state
    // setText("newText");
    return(
        
        <div className="mb-3">
            <h1>{props.heading}</h1>
        <textarea className="form-control"  value = {text} onChange ={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert To UPPERCASE</button>
    
        </div> 
        
    )
}

TextForms.propTypes = {
    heading : PropTypes.string.isRequired
}