import {range} from '../util/range'
import { resourceUsage } from 'process'


export const testArrReduce = ():void => {

    let reduceSum: number = range(1, 100 + 1)
        .reduce((result: number, value: number)=> result + value, 0)

    console.log(reduceSum)
}