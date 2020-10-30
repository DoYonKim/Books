import React from 'react';
import PropTypes from 'prop-types';

class PropsComponent extends React.Component {
    render() {
        return (
            <div className = "message-container">
                {this.props.name}
            </div>
        );
    }
}

PropsComponent.propTypes ={
    name: PropTypes.string,
    numVal: PropTypes.number,
    boolVal: PropTypes.bool,
    arrayVal: PropTypes.arrayOf(PropTypes.string),
    objVal: PropTypes.object
    //node, func 또한 가능
};

export default PropsComponent;