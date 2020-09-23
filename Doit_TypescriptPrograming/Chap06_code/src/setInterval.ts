import { clear } from "console"

export const setInterval_test = (): void => {

    const period = 1000
    let count = 0

    console.log('program started...')
    const id = setInterval(() => {
        if (count >= 13) {
            clearInterval(id)
            console.log('program finished...')
        }
        else
            console.log(++count)
    }, period)
}