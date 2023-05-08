import React from "react";
import "./QRComponent.css";
import { useSelector } from "react-redux";
import { QRCodeSVG } from "qrcode.react";

// qrCodeText is the text that will be converted to a QR code
// the logo is a local image that will be displayed on the QR code
const QRComponent = () => {
  const link = useSelector((state) => state.qrcode.link);

  const downloadQRCode = async () => {
    const qrCodeWrapper = document.getElementById("qrCodeWrapper");
    const qrCodeSvg = qrCodeWrapper.querySelector("svg");
    if (!qrCodeSvg) return;
  
    const svgData = new XMLSerializer().serializeToString(qrCodeSvg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const imgUrl = URL.createObjectURL(svgBlob);
  
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
  
      const pngUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = "qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(imgUrl);
    };
  
    img.src = imgUrl;
  };

  return (
    <div className="qr-container" id="qrCodeWrapper">
      {link ? (
        <>
          <QRCodeSVG
            value={link}
            size={300}
            bgColor={"rgba(0, 0, 0, 0)"}
            fgColor={"#000000"}
          />
          <button onClick={downloadQRCode}>Download QR Code</button>
        </>
      ) : (
        <p>Please enter a link to generate a QR code.</p>
      )}
    </div>
  );
};

export default QRComponent;
