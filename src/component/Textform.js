import React , {useState} from 'react'

export default function Textform(props) {
    const[text, setText] = useState('Enter your data here');

    const handleUpClick =()=>{
        // console.log("Button was clicked" + text);
        let NewText = text.toUpperCase();   
              
        setText(NewText)
    }
    const handleOnChange =(event)=>{
        // console.log("handle on change");
        setText(event.target.value);
    }
    const handleDownClick =()=>{
        let  NewText = text.toLowerCase();
        setText(NewText)
    }
    const clearText =()=>{
        let NewText = " ";
        setText(NewText)

    }

    //  how to copy code
    const handleCopy =()=>{
        let ipText = document.getElementById("mybox");
        ipText.select();
        navigator.clipboard.writeText(ipText.value);
    }
    // const [ipText, setipText] = useState('');

    // how to remove extra spaces from the whole text
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
  return (
   <>
   
    <div className="container mt-5">
        <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label" style={{color: props.mode==='light'?'#00011e':'white'}}>Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" style={{ backgroundColor: props.mode==='light'?'white':'grey' , color: props.mode==='light'?'#00011e':'white'}}/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: props.mode==='light'?'#00011e':'white'}}>Example textarea</label>
                <textarea className="form-control" id="mybox" rows="5" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='light'?'white':'grey' ,  color: props.mode==='light'?'#00011e':'white'}}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-warning mx-1" onClick={handleDownClick}>Convert to  Lowercase</button>
            <button className="btn btn-info mx-1" onClick={clearText}>Clear</button>
            <button className="btn btn-danger mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>remove</button>
    </div>

    <div className="container" style={{color: props.mode==='light'?'#00011e':'white'}}>
            <h1>Your Paragraph data</h1>
            <p  >This paragraph consist of {text.split(" ").length} and {text.length} caracters</p>
            <p >Time required to read this paragraph: {0.008 * text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to Preview"}</p>
    </div>
    </>
  )
}
