import React from "react";
import "./QRComponent.css";
import { useSelector } from "react-redux";
import { QRCodeSVG } from "qrcode.react";

// qrCodeText is the text that will be converted to a QR code
// the logo is a local image that will be displayed on the QR code
const QRComponent = () => {
  const link = useSelector((state) => state.qrcode.link);

  return (
    <div className="qr-container">
      {link ? (
        <QRCodeSVG
          value={link}
          size={300}
          bgColor={"#ffffff"}
          fgColor={"000000"}
        />
      ) : (
        <p>Please enter a link to generate a QR code.</p>
      )}
    </div>
  );
};

export default QRComponent;
