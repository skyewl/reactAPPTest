import React from 'react';
import logo from './logo.svg';
import Test from './test';
import './App.css';

function Name(props) {
  return <h1>网站名称：{props.name}</h1>;
}
function Url(props) {
  return <h1>网站地址：{props.url}</h1>;
}
function Nickname(props) {
  return <h1>网站小名：{props.nickname}</h1>;
}

function App() {
  var myStyle = {
    fontSize: 20,
    color: '#FF0000',
    lineHeight: 1
  }
  var i = 0
  // var arr = [
  //   <h1>菜鸟教程</h1>,
  //   <h2>学的不仅是技术，更是梦想！</h2>,
  // ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>欢迎来到我的react项目</h2>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/*链接*/}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <div style={myStyle}>
        <h1>{i===0?'true':'false'}</h1>
      </div>
      <Test />
      <div>
        <Name name="菜鸟教程" />
        <Url url="http://www.runoob.com" />
        <Nickname nickname="Runoob" />
      </div>
      <Test />
      <Test />
    </div>
  );
}

export default App;
