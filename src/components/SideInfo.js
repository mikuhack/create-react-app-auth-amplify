import React from "react";
// import QRCode from "./QRCode.js";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/SideInfo.css";

function SideInfo() {
  return (
    <div className="side-info">
      <Container fluid={true}>
        <Row>
          <Col>
            {/* <QRCode /> */}
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="info-head">Join at</div>
            <div className="info-body">iguigu-hacking.com</div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SideInfo;
