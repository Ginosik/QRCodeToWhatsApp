import React, { useEffect, useState } from "react";
import "./QRComponent.css";
import {QRCodeSVG }from "qrcode.react";
import logo from "../../Assets/logo192.png";

// qrCodeText is the text that will be converted to a QR code
// the logo is a local image that will be displayed on the QR code
const QRComponent = ({ qrCodeText }) => {
  const [qrCode, setQrCode] = useState(null);

  useEffect(() => {
    setQrCode(qrCodeText);
  }, [qrCodeText]);

  return (
    <div className="qr-container">
      <QRCodeSVG
        value={qrCode}
        size={300}
        imageSettings={{
          src: logo,
          height: 50,
          width: 50,
          excavate: true,
        }}
      />
    </div>
  );
};

export default QRComponent;
