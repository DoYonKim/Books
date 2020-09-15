import {range} from '../util/range'
import {fold} from '../util/fold'

export const testFold = ():void => {

    let numbers: number[] = range(1, 100 + 1)

    // fold 이용 모든 합 구하기
    let result = fold(numbers, (result, value) => result + value, 0)
    
    console.log(result)
}