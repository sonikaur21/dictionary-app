import "./App.css";
import Dictonary from "./Dictonary";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="mt-5">Dictonary App</h1>
          <main className="mt-5">
            <Dictonary />
          </main>
        </header>
        <footer className="mt-5">
          {" "}
          This project was coded by Sonia Kaur is open-sourced on{" "}
          <a href="/">GitHub</a> and hosted on <a href="/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
