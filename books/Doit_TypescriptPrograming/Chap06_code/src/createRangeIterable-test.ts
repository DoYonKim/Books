import {createRangeIterable} from './createRangeIterable'

export const createRangeIterable_test =(): void=>{
    
    const iterator = createRangeIterable(1, 5 + 1)

    while(true){
        const {value, done} = iterator.next()
        if(done) break
        console.log(value)
    }
}
