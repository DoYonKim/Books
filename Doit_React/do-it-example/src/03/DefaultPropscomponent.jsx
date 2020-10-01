import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DefaultPropscomponent extends Component {
    render() {

        let message1 = '';
        if(this.props.boolValue === false){
            message1 = 'boolValue 기본값은 false 입니다';
        }
        
        let message2 = '';
        if(this.props.boolValueWithoutDefault === false){
            message2 = 'boolValueWithoutDefault 기본값은 false 입니다';
        }
        
        return (
            <div className = "message-container">
                {message1}
                {message2}
            </div>
        );
    }
}

DefaultPropscomponent.propTypes = {
    boolValue: PropTypes.bool,
    boolValueWithoutDefault: PropTypes.bool,
};

DefaultPropscomponent.defaultProps = {
    boolValue: false,
}

export default DefaultPropscomponent;