import { useParameter } from '@storybook/addons';
import React, { Component } from 'react';

class NewCounter extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.increasecount = this.increasecount.bind(this);
    }

    static getDerivedStateFromProps(props, state){

        const {count} = props;
        return {
            count,
            newCount: count === state.count ? state.newCount: count,
        };
    }

    increasecount(){
        this.setState(({newCount}) => ({
            newCount: newCount + 1,
        }));
    }

    render() {
        return (
            <div>
                현재 카운트: {this.state.newCount}
                <button onClick={this.increasecount}>카운트 증가</button>
            </div>
        );
    }
}

export default NewCounter;