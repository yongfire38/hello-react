import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';
import MyName from './MyName';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* 디폴트 코드 */}
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}


        {/* 이름 표시 */}
        {/* <MyName name="박형준"/> */}

        {/* 카운터 */}
        <Counter/>
     
      </header>
    </div>
  );
}

MyName.defaultProps = {
  name: '기본이름'
};

export default App;
