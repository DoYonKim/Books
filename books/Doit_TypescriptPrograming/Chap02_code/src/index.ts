import IPerson from './person/IPerson'
import Person, {makePerson} from './person/Person'
import Chance from 'chance'
import * as R from 'ramda'

const testMakePerson = (): void => {
    let jane: IPerson = makePerson('jane')
    let jack: IPerson = makePerson('jane')
    console.log(jane, jack)
}

testMakePerson()