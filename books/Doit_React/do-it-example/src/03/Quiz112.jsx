import React, { Component } from 'react';

class Quiz112 extends Component {

    constructor(props){
        super(props);

        this.state={
            count:0,
        }
        this.increaseCount = this.increaseCount.bind(this);
    }

    increaseCount(){

        this.setState({
            count: this.state.count +1,
        });

    }

    render() {
        return (
            <div>
                <span>count: {this.state.count}</span>
                <button onClick={this.increaseCount}>increase count</button>
            </div>
        );
    }
}

export default Quiz112;