import {range} from '../util/range'
import { values } from 'ramda'

export const testArrMap = (): void =>{
    let names: string[] =range(1,5 + 1)
        .map((val,index) => '[' + index.toString() + '] ' + val.toString()
    )

    console.log(names)

}
