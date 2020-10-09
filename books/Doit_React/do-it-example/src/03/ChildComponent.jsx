import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends Component {
    render() {

        const{
            boolValue,
            numValue,
            arrayValue,
            objValue,
            nodeValue,
            funcValue,
        } = this.props;

        return (
            <div>
                <span>Boolean: {boolValue}</span>
                <span>Number: {numValue}</span>
                <span>Array: {arrayValue}</span>
                <span>Object: {String(objValue)}</span>
                <span>Node: {nodeValue}</span>
                <span>Function: {String(funcValue)}</span>
            </div>
        );
    }
}

ChildComponent.propTypes = {
    boolValue: PropTypes.bool,
    numValue: PropTypes.number,
    arrayValue: PropTypes.arrayOf(PropTypes.number),
    objValue: PropTypes.object,
    nodeValue: PropTypes.node,
    funcValue: PropTypes.func,
}

export default ChildComponent;