import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Dental Wilde 
          <br/>
            Website under construction
        </p>
        <a
          className="InstagramPerfil"
          href="https://www.instagram.com/dentalwildeconsultorio/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Our Instagram Profile
        </a>
      </header>
    </div>
  );
}

export default App;
