import './App.css';
import QRComponent from './Components/QRComponent/QRComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QRComponent qrCodeText="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
      </header>
    </div>
  );
}

export default App;
