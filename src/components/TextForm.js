import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
 
      
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("converted to uppercase", "success")
    
  }
  const handleLoClick = () => {
   
      let newText = text.toLowerCase();  
      setText(newText)
      props.showAlert("converted to lowercase", "success")

    
  }

  const handleOnChange = (event) => {
    console.log("OnChange");
    setText(event.target.value)
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  }


  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }


  const [text, setText] = useState('');

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <form >
          <div className="form-group " >
            <h2 className="my-3">{props.heading}</h2>
            {/* <label htmlFor='exampleFormControlTextarea1'>Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#352a2a' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="9"></textarea>
          </div>
        </form>
        <button disabled={text.length === ""} className='btn btn-primary  my-1 ' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === ""} className='btn btn-primary  mx-3 my-1' onClick={handleLoClick}>Convert to Loercase</button>
        <button disabled={text.length === ""} className="btn btn-primary mx-1 my-2" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === ""} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === ""} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and{text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).length} minuts read</p>
        <h2>Periview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to perview it here"}</p>
      </div>
    </>
  )
}
