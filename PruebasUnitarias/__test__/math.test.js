import {sumar, mult, restar, dividir} from '../src/math'

describe('Calculos matematicos', () => {
    test('Prueba de suma', () => {
        expect(sumar(1,1)).toBe(2)
    })
});


