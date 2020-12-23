import React, { Component } from 'react';

class Chap0308ListExample extends Component {
    render() {

        const priceList = [1000, 2000, 3000, 4000];
        const prices  = priceList.map((price)=>(<div>가격: {price}원</div>));

        return (
            <div>
                <div>배열 테스트</div>
                {prices}
            </div>
        );
    }
}

export default Chap0308ListExample;