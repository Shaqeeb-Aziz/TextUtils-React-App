import React, {useState} from 'react'

export default function Textform(props) {

  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!" , "Success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!" , "Success");
  }

  const handleClClick = () => {
    setText("")
    props.showAlert("Text remove!" , "Success");
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  return (
    <>
    <div className='container' style={{color: props.mode === 'light'? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey' : 'white', color: props.mode === 'light'? 'black' : 'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'light'? 'black' : 'white'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text : "Enter something in the text to preview it here"}</p>
    </div>
    </>
  )
}
