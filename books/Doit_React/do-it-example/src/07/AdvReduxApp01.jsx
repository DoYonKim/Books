import React, {PureComponent} from 'react';
import Provider from 'react-redux';
import configureStore from './configureStore';

class ReduxApp extends componet {
    
    store = configureStore({loading: false});


    const dd;

    render(){
        return (
            <Provider store={this.store}>
                리덕스 예제
            </Provider>
        );
    }
}

export default ReduxApp;