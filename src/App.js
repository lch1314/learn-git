import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>这是新加入的一行</div>
        <div>这是新加入的第二行</div>
        <div>可以push吗</div>
        <b>1111</b>
        <p>这是dev2分支上做的开发</p>
        <div>我在dev2分支上再加一行</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
