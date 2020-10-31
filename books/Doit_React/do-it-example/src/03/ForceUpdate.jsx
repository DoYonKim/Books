import React, { Component } from 'react';

class ForceUpdate extends Component {

    constructor(props){
        super(props);

        this.loading = true;
        this.formData = "no data";

        this.handleData = this.handleData.bind(this);

        setTimeout(this.handleData, 4000);
    
    }

    handleData(){
        const data = 'new data';
        
        this.loading = false;
        this.formData = data + this.formData;

        this.forceUpdate();

    }

    render() {
        return (
            <div>
                <span>로딩중-force: {String(this.loading)}</span>
                <span>결과-force: {String(this.formData)}</span>
            </div>
        );
    }
}

export default ForceUpdate;