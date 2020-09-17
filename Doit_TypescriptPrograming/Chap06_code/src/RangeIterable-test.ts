import {RangeIterable} from './RangeIterable'

export const RangeIterable_test = () :void =>{

    const iterator = new RangeIterable(1, 3 + 1)

    for(let value of iterator)
        console.log(value)

}

