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
        <div>之前修改文件错了，我重新提交下</div>
        <div>我是别的分支上合并过来的代码，并提前合并到master分支上了</div>
        <div>feature分支上第一次提交</div>
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
