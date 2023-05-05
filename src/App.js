import './App.css';
import QRComponent from './Components/QRComponent/QRComponent'
import StringInput from './Components/StringInput/StringInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main className='App-main'>
        <StringInput />
        <QRComponent />
      </main>
      <footer className='App-footer'>
      </footer>
    </div>
  );
}

export default App;
