import React from 'react'; 
import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';

function MyFunctionalComponent() {
  return <p>Мій функціональний компонент</p>;
}
class MyClassComponent extends React.Component {
  render() {
    return <p>Мій класовий компонент</p>;
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Мій власний заголовок</h1>
        <p>Це основний компонент</p>
        <MyFunctionalComponent />
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
        <MyClassComponent />
        <div>
      <h1>Головний компонент</h1>
      <ChildComponent initialValue={10} />
      <ChildComponent initialValue={20} />
      <ChildComponent initialValue={30} />
    </div>
      </header>
    </div>
  );
}
export default App;

