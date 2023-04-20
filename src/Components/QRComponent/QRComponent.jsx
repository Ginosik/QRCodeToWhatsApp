import React, { useEffect, useState } from "react";
import "./QRComponent.css";
import QRCode from "qrcode";

// QRComponent is a component that renders a QR code
// It takes a string as a prop and renders a QR code
// for that string
const QRComponent = ({ qrCodeText }) => {
  // The QR code is stored as a data URL in the state
  const [qrCode, setQRCode] = useState("");

  // When the component is mounted, generate a QR code
  // for the qrCodeText prop
  useEffect(() => {
    QRCode.toDataURL(qrCodeText, (err, url) => {
      setQRCode(url);
    });
  }, [qrCodeText]);

  return (
    <div className="QRComponent">
      <img src={qrCode} alt="QR Code" />
    </div>
  );
};

export default QRComponent;
