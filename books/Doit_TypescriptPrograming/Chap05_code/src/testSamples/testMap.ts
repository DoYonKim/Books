import {range} from '../util/range'
import {fold} from '../util/fold'
import {map} from '../util/map'

export const testMap = (): void => {

    //데이터를 1~100까지 set 하는 단계
    let numbers: number[] = range(1, 100 + 1)

    //데이터를 각자 제곱하여 더하기
    let result = fold(
        map(numbers, value => value * value),
        (result, value) => result + value,
        0)

    console.log(result)
}


