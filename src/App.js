import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="app-logo img-fluid" alt="app-logo" />
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Chloedj" target="_blank" rel="noreferrer">
            Chloe Duggan-Jones
          </a>{" "}
          , is open souced on{" "}
          <a
            href="https://github.com/Chloedj/reactdictionary"
            target="_blank"
            rel="noreferrer"
          >
            on GitHub
          </a>
          , and{" "}
          <a
            href="https://glittering-kleicha-f8d802.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
