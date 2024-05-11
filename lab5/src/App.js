import logo from "./logo.svg";
import "./App.css";
import "./components/Sidebar.css";
import "./components/Article.css";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Article />
    </div>
  );
}

export default App;
