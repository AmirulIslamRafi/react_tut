import React, {useState} from "react";

export default function About() {

    const [myStyle, setMyStyle] = useState({
        backgroundColor: '#f1bb5852',
        color: 'black'
    })

    const [btnText, setBtnText] = useState('Enable Dark Mode');


    const toggleStyle = ()=>{
        if (myStyle.color ==="black") {
            setMyStyle({
                backgroundColor: '#212529e6',
                color: 'white'

              
            })
            setBtnText('Enable Light Mode')
        }
        else{
            setMyStyle({
                backgroundColor: '#f1bb5852',
                color: 'black'
            })
            setBtnText('Enable Dark Mode')
        }
    }

//     const [myStyle, setmyStyle] = useState({
//         backgroundColor: 'white',
//         color: 'black'
//     })

//     const [btnText, setbtnText] = useState('Dark')
// const toggleStyle = ()=>{
//     if(myStyle.color==='black'){
//         setmyStyle({
//             backgroundColor: ' black',
//             color: 'white'
//         })
//         setbtnText('Light')
//     }
//     else{
//         setmyStyle({
//         backgroundColor: 'white',
//         color: 'black'
//     })
//     setbtnText('Dark')
//     }
// }
  return (
    <div className="container px-5 py-2 my-3 rounded-3" style={myStyle}>
        <h1 className="my-4 text-center">About Us</h1>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header"  id="headingOne">
            <button
              className="accordion-button fw-bold text-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}

            >
              Dog Pictures
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed fw-bold text-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Cat Gallary
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed fw-bold align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Selfi With Pets
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container m-3">
        <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
      </div>
    </div>
  );
}
