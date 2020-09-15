export const fold = <T>(array: T[], callback: (result: T, val: T) => T, initVlaue: T) => {
    let result: T = initVlaue
    for(let i = 0; i <array.length; ++i){
        const value = array[i]
        result = callback(result, value)
    }
    return result
}