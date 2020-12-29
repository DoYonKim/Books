import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import withStyles, {css} from './withStyle';

class Button extends PureComponent{

    render(){
        const {
            children, 
            disabled,
            styles,
            large,
            xlarge,
            small,
            xsamll,
            primary,
            secondary,
            onPress,
        } = this. props;

        return (
            <button {...css(
                styles.default,
                xsamll && styles.xsamll,
                small && styles.small,
                large && styles.large,
                xlarge && styles.xlarge,
                secondary && styles.secondary,
                primary && styles.primary,
            )} 
            onClick ={onPress}>{children}</button>
        )
    }
}

Button.propTypes={
    children: PropTypes.node.isRequired,
    styles: PropTypes.object,
    large: PropTypes.bool,
    xlarge: PropTypes.bool,
    small: PropTypes.bool,
    xsamll: PropTypes.bool,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    onPress: PropTypes.func,
}
Button.defaultProps ={
    onPress: ()=> {},
    styles: false,
    large: false,
    xlarge: false,
    small: false,
    xsamll: false,
    primary: false,
    secondary: false,
}

export default withStyles(({ color, size, unit, responsive }) => ({
    default: {
      border: 1,
      borderStyle: 'solid',
      borderColor: color.default,
      borderRadius: 2,
      color: color.default,
      fontSize: size.md,
      padding: unit * 2,
      cursor: 'pointer',
      [responsive.small]: {
        width: '100%',
      },
    },
    xlarge: {
        fontSize: size.xg,
    },
    large: {
        fontSize: size.lg,
    },
    small: {
        fontSize: size.sm,
        padding: unit,
    },
    xsamll: {
        fontSize: size.xs,
        padding: unit,
    },
    primary:{
        borderColor: color.primary,
        color: color.white,
        background: color.primary,
    },
    secondary:{
        borderColor: color.secondary,
        color: color.secondary,
    }
})) (Button);