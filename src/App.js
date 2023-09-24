import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";


function App() {

  const [sta, setSta] = useState("")
  fetch('freeman')
      .then(res => res.text()).then(data => setSta(data)).catch(err => err)

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
          {sta}
        </a>
      </header>
    </div>
  );
}

export default App;
