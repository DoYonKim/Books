import React, { Component } from 'react';

class Chap0309Couneter3 extends Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        };

        this.increaseCount = this.increaseCount.bind(this);
        this.resetCount = this.resetCount.bind(this);
    }

    increaseCount(){
        this.setState(({count})=>({count: count + 1}));
    }

    resetCount(){
        this.setState({count: 0});
    }


    render() {
        return (
            <div>
                현재 카운트: {this.state.count}
                <button onClick = {this.increaseCount} onMouseOut = {this.resetCount}>
                    카운트 증가
                </button>
                커서가 밖으로 나가면 카운트 수가 0으로 초기화 됩니다.
            </div>
        );
    }
}

export default Chap0309Couneter3;