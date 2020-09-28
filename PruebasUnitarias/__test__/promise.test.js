import getDataFromApi from '../src/promise';

describe('Probando promesas', () => {
    test('Realizando un peticion a una api', done => {
        const api = 'https://rickandmortyapi.com/api/character';
        getDataFromApi(api).then(data => {
            console.log(data);
            expect(data.result.length).toBeGreaterThan(0);
            done();
        })
    })
});