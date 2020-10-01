import React, { Component } from 'react';
import PropTypes from 'prop-types'

class PropsComponent extends Component {
    render() {
        return (
            <div className = "message-contianer">
                {this.props.name}
            </div>
        );
    }
}

PropsComponent.protoType = {
    name: PropTypes.string,
};

export default PropsComponent;