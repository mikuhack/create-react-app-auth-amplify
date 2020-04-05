import React, { Component } from 'react';
// import logo from './logo.svg';
import "./styles/App.css";
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import Image from "react-bootstrap/Image";
import Header from "./components/Header.js";
// import SideInfo from "./components/SideInfo.js";
// import Ad from "./components/Ad.js";
import MessageInput from "./components/MessageInput.js";
import MessageList from "./components/MessageList.js";
import logo from "./pic/logo.png";

import { Container, Row, Col } from "react-bootstrap";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container fluid={true}>
          <Row>
            <Col lg={{ span: 6, offset: 3 }}>
              <Image src={logo} fluid />
            </Col>
          </Row>
          <Row>
            {/* <Col lg={3}>
              <SideInfo />
            </Col> */}
            <Col lg={{ span: 6, offset: 3 }}>
              <MessageInput />
              <MessageList />
              {/* <Ad /> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
