import React from 'react';
import PorpTypes from 'prop-types';

export default WrappedComponent =>{
    const {displayName, name: componentName} = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function WithLoadingContext(props, context){
        const {loading, setLoading} = context;
        return (
            <WrappedComponent {...props} loading={loading} setLoading={setLoading}/>
        );
    };
    
    WithLoadingContext.displayName = `withLoading(${wrappedComponentName})`;
    WithLoadingContext.contextType = {
        loading: PorpTypes.bool,
        setLoading: PorpTypes.func,
    };

    return WithLoadingContext;
};