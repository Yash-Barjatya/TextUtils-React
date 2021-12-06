import React, { useState } from 'react'// react hook
export default function Textform(props) {



    const [text, setText] = useState("")
    //  text = "new text" // wrong way to change the state
    //setText("new Text ");// correct way to change the state
    const UppercaseClicked = () => {
        //console.log("uppercase btn clicked");
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("Converted to UpperCase", 'success')
    }
    const LowercaseClicked = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("Converted to LowerCase", 'success')
    }
    const RemoveExtraSpacesClicked = () => {
        let arr = text.split(/[ ]+/);
        let newText = arr.join(" ");
        setText(newText);
        props.showAlert("Extra Spaces removed", 'success')
    }
    const CopyTextClicked = () => {
        var text = document.getElementById("myBox");
        text.select();

        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied", 'success')
    }
    const CapitalizeClicked = () => {
        var i = 0;
        var capitalize = "";
        for (i = 0; i < text.split(" ").length; i++) {
            for (let j = 0; j < text.split(" ")[i].length; j++) {
                if (j === 0) {
                    capitalize += text.split(" ")[i][j].toUpperCase();
                }
                else {
                    capitalize += text.split(" ")[i][j];
                }
            }
            capitalize += " "
        }
        setText(capitalize);
        props.showAlert("Text capitalized", 'success')
    }
    const ResetClicked = () => {
        setText("");
        props.showAlert("Text cleared", 'success')
    }

    // it is imp to listen to onChange to write in textarea
    const handleOnChange = (event) => { // on making any change to the textarea it will be triggered
        //console.log("handleOnChange ");
        setText(event.target.value);// now you will be able to write on textarea
    }
    const wordCounter = (text) => {
        let arr = text.split(" ");
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== " ") {
                count++;
            }
        }

        return count;
    }
    return (
        <>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} id="myBox" rows="5" onChange={handleOnChange}></textarea>
                </div>{/*in above style one curly bracket aaas we are writing in js and second as we ae makinga an object*/}
                <button className={`btn btn-warning mx-2`} onClick={UppercaseClicked}>Convert to Uppercase</button>
                <button className={`btn btn-warning mx-2`} onClick={LowercaseClicked}>Convert to Lowercase</button>
                <button className={`btn btn-warning mx-2`} onClick={CapitalizeClicked}>Capitalize text</button>
                <button className="btn btn-info mx-2" onClick={RemoveExtraSpacesClicked}>Remove Extraspaces </button>
                {/* <button type="button" className="btn btn-success mx-2 popoverBtn" onClick={CopyTextClicked} data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Text copied">Copy Text</button>
                <button type="button" className="btn btn-danger mx-2 popoverBtn" onClick={ResetClicked} data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Text cleared">Reset Text</button> */}
                <button className="btn btn-success mx-2" id="copyTextBtn" onClick={CopyTextClicked}>Copy Text</button>
                <button className="btn btn-danger mx-2" onClick={ResetClicked}>Reset</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2><u>Your text summary</u></h2><br></br>
                <p><i>Your text has : {wordCounter(text)} words and {text.length} character</i></p>
                <h2><u>Text preview</u></h2>
                <p><i>{text.length > 0 ? text : "Write something in the textbox above to preview it here..."}</i></p>
            </div>
        </>
    )
}
