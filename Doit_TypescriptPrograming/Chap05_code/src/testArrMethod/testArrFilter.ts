import {range} from '../util/range'

const array: number[] = range(1,100 + 1)
const half = array.length / 2

export const testArrFilter =(isShowBelow: boolean):void =>{

    let showArray: number[] = []

    if(isShowBelow){
        showArray = array.filter((v,index) => index < half)
    }else{
        showArray= array.filter((v,index) => index >= half)
    }

    console.log(showArray)
}