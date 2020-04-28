import React, { useRef } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createTodo } from "../graphql/mutations";
import { Form, Button } from "react-bootstrap";
import { Auth } from "aws-amplify";
import Badge from "react-bootstrap/Badge";
import "../styles/MessageInput.css";

function MessageInput() {
  const iconRef = useRef();

  const nameRef = useRef();
  const messageRef = useRef();

  async function createNewMessage() {
    let userName = "";
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user);
        userName = user.username;
        // this.setState({ authState: "signedIn" });
      })
      .catch((e) => {
        console.log(e);
        // this.setState({ authState: "signIn" });
      });
    const message = {
      // icon: iconRef.current.value,
      // name: nameRef.current.value,
      // message: messageRef.current.value
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
        あったらいいな、こんな社内サービス / アプリケーション
      </h1>
      <Form>
        {/* <Form.Group controlId="formName">
          <select size="1" ref={iconRef}>
            <option>🐬</option>
            <option>🦈</option>
            <option>🐠</option>
            <option>🐕</option>
            <option>🐩</option>
            <option>🐈</option>
            <option>🐅</option>
            <option>🐒</option>
            <option>🐧</option>
            <option>🐤</option>
            <option>🦌</option>
            <option>🍜</option>
          </select>
          <Form.Control type="text" placeholder="your name" ref={nameRef} />
          <Form.Text className="text-muted">
            ACCA Jusan-ku Kansatsu-ka ha kami anime.
          </Form.Text>
        </Form.Group> */}
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
