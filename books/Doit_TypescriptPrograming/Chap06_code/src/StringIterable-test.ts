import {StringIterable} from './StirngIterable'

export const StringIterable_test = ():void =>{

    for(let value of new StringIterable(['hello', 'word', '!']))
    console.log(value)
}
