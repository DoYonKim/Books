import {generator} from './generator'

export const generator_test = (): void => {

    for(let value of generator())
        console.log(value)
}