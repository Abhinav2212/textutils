import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export default function TextCompoenent(props) {
  const [myText, setMyText] = useState("Please enter something here!");
  const handleOnChange = (event) => {
    // console.log("on change called");
    setMyText(event.target.value);
  };

  function handleOnClickCapital() {
    let newText = myText.toUpperCase();
    setMyText(newText);
  }
  
  function handleOnClickSmall() {
    let newText = myText.toLowerCase();
    setMyText(newText);
  }

  return (
    <div className = "container" >
      <div className="container text-left" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 >{props.title}</h1>
        <Form>
          <Form.Group className="mb-0 form-dark" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter your text here</Form.Label>
            <Form.Control
            style={{backgroundColor: props.mode==='dark'?'#061420':'white' , color: props.mode==='dark'?'white':'#042743'}}
              as="textarea"
              value={myText}
              onChange={handleOnChange}
              rows={9}
            />
          </Form.Group>
        </Form>
        <div className = "container" >
          <h3>Your text summary</h3>
          <p>
            {myText.split(" ").filter((element)=>{return element.length!==0}).length} words and {myText.length} characters
          </p>
          <p>{0.008 *  myText.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
          <Button variant="warning" onClick={handleOnClickCapital}>
            Capital
          </Button>{' '}
          <Button variant="danger" onClick={handleOnClickSmall} >
            Small
          </Button>
        </div>
      </div>
    </div>
  );
}
