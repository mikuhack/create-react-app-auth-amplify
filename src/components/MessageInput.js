import React, { useRef } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "../graphql/mutations";
import { Form, Button } from "react-bootstrap";
import { Auth } from "aws-amplify";
import Badge from "react-bootstrap/Badge";
import "../styles/MessageInput.css";

function MessageInput() {
  const messageRef = useRef();

  async function createNewMessage() {
    let userName = "";
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user);
        userName = user.username;
      })
      .catch((e) => {
        console.log(e);
      });
    const message = {
      name: userName,
      description: messageRef.current.value,
    };
    await API.graphql(graphqlOperation(createTodo, { input: message }));
    messageRef.current.value = "";
  }

  return (
    <div className="message-input">
      <h1 className="topic">
        <Badge variant="success">今日のトピック</Badge>
        <br />
        自由に話そう！それと、本サービスや取り組み自体への感想など頂けたらうれしいです😊
      </h1>
      <Form>
        <Form.Group controlId="formContent">
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="今日のトピックについて投稿してみよう"
            ref={messageRef}
          />
          <Form.Text className="text-muted">
            新型コロナウイルスに打ち勝て人類！
          </Form.Text>
        </Form.Group>
        <Button onClick={createNewMessage} variant="primary">
          send
        </Button>
      </Form>
    </div>
  );
}

export default MessageInput;
