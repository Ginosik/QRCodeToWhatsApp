const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const qrcodeElement = document.getElementById('qrcode');

const qrCode = new QRCode(qrcodeElement, {
  text: url,
  width: 256,
  height: 256,
  correctLevel: QRCode.CorrectLevel.H
});