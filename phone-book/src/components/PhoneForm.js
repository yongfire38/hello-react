// file: src/components/PhoneForm.js
import React, { Component } from 'react';

class PhoneForm extends Component {
    
    //state 
    state = {
      name: '',
      phone:''
    }

    //input 값이 바뀔 경우, 값을 읽어서 state 변경 뿌려줌
    //키 값이 변수일 경우엔 키를 대괄호로 묶어준다.
    handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: '',
      phone: ''
    })
  }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="이름"
            value={this.state.name}
            onChange={this.handleChange}
            name = "name"
          />
          <input
            placeholder="전화번호"
            value={this.state.phone}
            onChange={this.handleChange}
            name = "phone"
          />
          <div>{this.state.name} {this.state.phone}</div>
          <button type="submit">등록</button>
        </form>
      );
    }
  }
  
  export default PhoneForm;