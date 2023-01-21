import logo from './logo.svg';
import './App.css';
import { Display, HeadingXs } from './components/tipography';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Display>Testando Display</Display>
      <HeadingXs>Testando HeadingXs</HeadingXs>
    </div>
  );
}

export default App;
