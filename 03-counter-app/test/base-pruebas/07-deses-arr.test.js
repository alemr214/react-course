import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('Pruebas del archivo 07-deses-arr.js', () => {
    test('Debe de retornar un string y un número', () => { 
        const [letters, numbers] = retornaArreglo();

        // Verificar el tipo de dato
        expect(typeof letters).toBe('string');
        expect(letters).toEqual(expect.any(String));

        // Verificar el tipo de dato numerico 
        expect(typeof numbers).toBe('number');
        expect(numbers).toEqual(expect.any(Number));

    })
});