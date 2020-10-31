import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends Component {
    constructor(props) {
        super(props);

        this.setState({
            counter :1,
        })

        console.log('constructor');
    }

    componentWillMount() {

        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({counter:2})
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate');
        return {};
    }

    render() {
        console.log('render 호출');
        return null;
    }
}

LifeCycle.propTypes = {
    
    counter: PropTypes.number,
};

export default LifeCycle;