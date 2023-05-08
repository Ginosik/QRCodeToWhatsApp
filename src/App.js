import './App.css';
import QRComponent from './Components/QRComponent/QRComponent'
import StringInput from './Components/StringInput/StringInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>QR Code Generator</h1>
      </header>
      <main className='App-main'>
        <StringInput />
        <QRComponent />
      </main>
      <footer className='App-footer'>
        <a className="App-link" href="https://github.com/Ginosik">Ginosik</a>
      </footer>
    </div>
  );
}

export default App;
