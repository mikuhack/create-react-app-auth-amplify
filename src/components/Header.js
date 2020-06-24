import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import ModalQRCode from "./QRCode";

function Header() {
  return (
    <div className="sticky-top">
      {
        <Navbar bg="light" expand="lg" variant="light">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://bna-anime.com/" target="_blank">
                今期のおすすめアニメ
              </Nav.Link>
              <ModalQRCode />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      }
    </div>
  );
}

export default Header;
