import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Chap0310Input extends PureComponent {

    constructor(props){
        super(props);
        this.setRef = this.setRef.bind(this);
        this.handleChange = this.handleChange(this);
    }

    handleChange(e){
        const {name, onChnage} = this.props;
        if(onChnage){
            onChnage(name, e.target.value);
        }
    }
    
    componentDidMount(){
        if(this.props.autoFocus){
            this.ref.focus();
        }
    }

    componentDidUpdate(){
        if(this.props.autoFocus){
            this.ref.focus();
        }
    }

    setRef(ref){
        this.ref = ref;
    }

    render() {

        const{ errorMessage, label, name, value, type, onFocus} = this.props;

        return (
            <label>
                {label}
                <input
                    id={name}
                    ref = {this.setRef}
                    onChange={this.handleChange}
                    onFocus = {onFocus}
                    value={value}
                    type={type}
                />
                {errorMessage && <span className="error">{errorMessage}</span>}
            </label>
        );
    }
}

Chap0310Input.propTypes = {
    type: PropTypes.oneOf(['text', 'number', 'price']),
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    errorMessage: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    autoFocus: PropTypes.bool,
};

Chap0310Input.defaultProps={
    onChange: () =>{},
    onFocus: () => {},
    autoFocus: false,
    type: 'text',
}

export default Chap0310Input;