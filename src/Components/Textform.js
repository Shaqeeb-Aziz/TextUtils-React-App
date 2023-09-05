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
    <div className='container' style={{color: props.mode === 'dark'? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#13466e' : 'white', color: props.mode === 'dark'? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClClick}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color: props.mode === 'dark'? 'white' : 'black'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text : "Enter something in the text to preview it here"}</p>
    </div>
    </>
  )
}
