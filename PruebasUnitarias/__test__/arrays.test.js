import {arrayFrut, arrayColors} from '../src/arrays'

describe('Comprobamos que existe un elemento', () => {
    test('Contiene una banana', () => {
        expect(arrayFrut()).toContain('Banana')
    });
    test('No contiene un platano', () => {
        expect(arrayFrut()).not.toContain('platano')
    })
})

