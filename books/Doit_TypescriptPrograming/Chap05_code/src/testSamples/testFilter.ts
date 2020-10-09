import {range} from '../util/range'
import {fold} from '../util/fold'
import {filter} from '../util/filter'

export const testFilter =():void => {

    //데이터를 1~100까지 set 하는 단계
    let numbers: number[] = range(1, 100 + 1)

    //홀수만 찾아내는 과정
    const isOdd = (n: number): boolean => n % 2 != 0
    let result = fold(filter(numbers, isOdd), (result, value) => result + value, 0)

    console.log(result)
}