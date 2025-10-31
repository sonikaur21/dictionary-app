import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Dictionary App</h1>
          <main className="mt-5 ">
            <Dictionary defaultKeyword="hello" />
          </main>
        </header>
        <footer className="App-footer mt-5">
          {" "}
          This project was coded by Sonia Kaur is open-sourced on{" "}
          <a href="/">GitHub</a> and hosted on <a href="/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
