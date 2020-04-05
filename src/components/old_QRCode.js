import React from "react";
import QR from "qrcode.react";

function QRCode() {
  return (
    <>
      <QR size={200} value={window.location.href} />
    </>
  );
}

export default QRCode;
