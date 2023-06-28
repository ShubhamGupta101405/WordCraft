import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick=() =>{
        // console.log("UpperCase was clicked "+ text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!", "success");
    }
    const handleLowClick=() =>{
        // console.log("LowerCase was clicked "+ text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!", "success");
    }
    const handleClear=() =>{
        // console.log("Text was cleared ");
        let newText=("");
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      const cancelSpeech=()=>{
        speechSynthesis.cancel()
    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
      navigator.clipboard.writeText(text);
      props.showAlert("Text copied!", "success");
    }
    const[text, setText]= useState("");
  return (
    <div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1 className="mb-4"> {props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style ={{backgroundColor: props.mode==='dark'? '#13466e':'white', color: props.mode==='dark'? 'white':'#042743'}} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
      <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
      <button disabled={text.length===0} type="submit" className="btn btn-danger mx-2" onClick={cancelSpeech}>Stop TTS</button>
      <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClear}>Clear</button>
    </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text Summary</h2>
        <p>{text.trim().length } characters</p>
        <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p>
        <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2> Preview</h2>
        <p> {text.length? text: "Nothing to preview"}</p>
        
      </div>
    </div>
  );
}
