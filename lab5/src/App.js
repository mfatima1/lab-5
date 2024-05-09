import logo from './logo.svg';
import './App.css';
import './components/Sidebar.css';
import './components/Article.css'
import { Sidebar } from './components/Sidebar';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className='content'>
        <div className='left'>
        <Sidebar></Sidebar>
        </div>
        <div className='right'>
        <Article></Article>
        </div>
      </div>
    </div>
  );
}

export default App;
