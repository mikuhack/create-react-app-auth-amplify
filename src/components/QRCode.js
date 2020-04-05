import React from "react";
import QRCode from "qrcode.react";
import { Button, ButtonToolbar, Modal } from "react-bootstrap";
import "../styles/QRCode.css";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          TopiCha!にスマホからアクセス🚀
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="qrcode">
          <QRCode value={window.location.href} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button variant="outline-success" onClick={() => setModalShow(true)}>
        QR
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

//render(<App />);

export default App;
