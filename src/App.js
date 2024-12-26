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
        <div>我是dev分支上做的修改</div>
        <div>我是master分支上的第16行做的修改</div>
        <div>我是dev2分支做的修改</div>
        <div>这是新加入的第二行</div>
        <div>可以push吗</div>
        <div>我现在是在当前bug分支上修复bug,但是这个bug已经修复完了</div>
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
