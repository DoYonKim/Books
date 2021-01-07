import React from 'react';
import withState from 'recompose/withState';
import Button from '../04/Button'

export const withCountState = withState('count', 'setCount', 0);//count, setCount를 프로퍼티로 받아 사용할 수 있음

function Counter({count, setCount}){
    const increaseCount = () => setCount(count = count + 1);

    return (
        <div>
            현재 카운트: {count}
            <Button onPress = {increaseCount}>
                카운트 증가
            </Button>
        </div>
    )
}

export const CounterWithCountState = withCountState(Counter);