import React from "react";
import "../styles/Message.css";

import { Card } from "react-bootstrap";

function Message(props) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            {props.icon}
            {props.name}
          </Card.Title>
          <Card.Text className="message">{props.message}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Message;
