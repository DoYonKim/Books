import React, { Component } from 'react';
import Counter from './Counter2'
class CounterApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            cousnt: 1
        };
    }

    increaseCount(){
        this.setState(({count}) => ({ count: count + 1}));
    }

    render() {
        return (
            <Counter count={this.state.count}/>
        );
    }
}

export default CounterApp;