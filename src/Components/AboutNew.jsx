import React from "react";
import { Accordion } from "react-bootstrap";
export default function AboutNew(props) {
    const myStyle = {backgroundColor: props.mode === "dark" ? "#061420" : "white",
    color: props.mode === "dark" ? "white" : "#042743" }
  return (
    <div className = "container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0"  >
          <Accordion.Header >Accordion Item #1</Accordion.Header>
          <Accordion.Body  style = {myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header style = {myStyle}>Accordion Item #2</Accordion.Header>
          <Accordion.Body style = {myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
