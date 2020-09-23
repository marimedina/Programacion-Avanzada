//comparador
describe('Comparadores comunes', () => {
    const user = {
        name: 'Maria',
        lastname: 'Medina'
    }

    const user2 = {
        name: 'Maria',
        lastname: 'Medina'
    }

    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2);
    })
})