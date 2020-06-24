import React from "react";
import "../styles/Message.css";
import { Card } from "react-bootstrap";

function Message(props) {
  const lines = props.message.split("\n").map((line, index) => (
    <span key={index}>
      {line}
      <br />
    </span>
  ));
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            {props.icon}
            {props.name}
          </Card.Title>
          <Card.Text className="message">{lines}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Message;
