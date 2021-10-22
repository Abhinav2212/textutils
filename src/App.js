
import './App.css';
import Header from './Components/Header'
// import { Container, Row, Col } from 'react-bootstrap'
import React, { useState } from 'react'

// import CenterComponent from './Components/CenterComponent';

function App() {
  const [mode, setMode] = useState("light")
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.title = "This is Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = "This is Light Mode"
    }
  }
  return (
    <>
      <div className="">
        <Header mode = {mode} toggleMode = {toggleMode} navTitle = "Text Utils" home="Home" about ="About" services = "Services" contact= "Contact Us"/>
        {/* <Container fluid="md">
          <Row className="">

            <Col md={12} className = "my-4"><About /></Col>

          </Row>
        </Container> */}
               
      </div>

    </>
  );
}

export default App;
