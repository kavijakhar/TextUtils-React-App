
import React from 'react'
import { useState, useEffect } from 'react'


export default function About() {

  const [Mystyle, setMystyle] = useState(
    {
      color: 'black',
      backgroundColor: 'white',
    })
  const [btnText, setbtnText] = useState("Enable dark mode")


  const toggleStyle = () => {
    if (Mystyle.color === 'black') {
      setMystyle(
        {
          color: 'white',
          backgroundColor: 'black',
          border: '1px solid white',
        }
      )
      setbtnText("Enable dark mode")
    }
    else {
      setMystyle(
        {
          color: 'black',
          backgroundColor: 'white',
        }
      )
      setbtnText("Enable light mode")
    }
  }
  useEffect(() => {
    if (Mystyle.color === 'black') {

      setbtnText("Enable dark mode")
    }
    else {

      setbtnText("Enable light mode")
    }
  }, [Mystyle])

  return (
    <>
      <div className="container rounded my-3" style={Mystyle}>
        <div className="accordion my-3" id="accordionExample" style={Mystyle}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" style={Mystyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse  collapse show" style={Mystyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={Mystyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={Mystyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item  my-3">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={Mystyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse"style={Mystyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
        <div className="container my-3" >
          <button onClick={toggleStyle} type="button" className="btn btn-primary" >{btnText}</button>

        </div>
      </div>
    </>
  )
}
