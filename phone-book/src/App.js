// file: src/App.js
import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';


class App extends Component { 

  //이미 2개가 들어가 있으므로 다음에 들어갈 데이터는 id=2가 될 것이므로 초기값을 2로 설정
  //랜더링과 상관없는 부분은 굳이 state에 넣을 필요가 없음
  id = 2
  
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      //리액트에서는 기본 state값을 변경하면 안된다.
      //push, splice, unshift, pop 같은 내장함수는 배열 자체를 직접 수정하게 되므로 적합하지 않음
      //기존의 배열에 기반하여 새 배열을 만들어내는 함수인 concat, slice, map, filter 같은 함수를 사용
      information: information.concat({ id: this.id++, ...data })
    })
  }

  render() {
    const { information } = this.state;

    return (
      <div>
       <PhoneForm
          onCreate={this.handleCreate}
        />
        {JSON.stringify(information)}
      </div>
    );
  }
}

export default App;
