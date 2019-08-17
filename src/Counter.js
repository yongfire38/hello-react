import React, { Component } from 'react';


const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
  };


class Counter extends Component {
    state = {
        number : 0
    }

    //에러 발생시 state 설정
    componentDidCatch(error, info) {
        this.setState({
          error: true
        });
      }

    shouldComponentUpdate(nextProps, nextState) {
        // 5 의 배수라면 리렌더링 하지 않음
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) return false;
        return true;
      }

    handleIncrease = () => {
        const { number } = this.state;
        this.setState({
          number: number + 1
        });
      }
    
      handleDecrease = () => {
        this.setState({
          number: this.state.number - 1
        });
      }

      render() {
        if (this.state.error) return (<h1>에러발생!</h1>);

        return (
          <div>
            <h1>카운터</h1>
            <div>값: {this.state.number}</div>
            { this.state.number === 4 && <Problematic /> }
            <button onClick={this.handleIncrease}>+</button>
            <button onClick={this.handleDecrease}>-</button>
          </div>
        );
      }
}

export default Counter;