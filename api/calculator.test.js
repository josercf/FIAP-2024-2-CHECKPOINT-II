const { somar, subtrair, multiplicar, dividir } = require('./calculator');

describe('Calculadora', () => {
    describe('somar', () => {
        test('deve retornar a soma de dois números', () => {
            
            const a = 5;
            const b = 3;
            const resultadoEsperado = 8;
            
            const resultado = somar(a, b);
            
            expect(resultado).toBe(resultadoEsperado);
        });

        test('deve retornar a soma de números negativos', () => {
            const a = -5;
            const b = -3;
            const resultadoEsperado = -8;
            const resultado = somar(a, b);
            expect(resultado).toBe(resultadoEsperado);
        });

        test('deve retornar a soma de um número positivo e um negativo', () => {
            const a = 5;
            const b = -3;
            const resultadoEsperado = 2;
            const resultado = somar(a, b);
            expect(resultado).toBe(resultadoEsperado);
        });
    });

    describe('subtrair', () => {
        test('deve retornar a subtração de dois números', () => {
            
            const a = 5;
            const b = 3;
            const resultadoEsperado = 2;
            
            const resultado = subtrair(a, b);
            
            expect(resultado).toBe(resultadoEsperado);
        });
    });

    describe('multiplicar', () => {
        test('deve retornar a multiplicação de dois números', () => {
            
            const a = 5;
            const b = 3;
            const resultadoEsperado = 15;            
            const resultado = multiplicar(a, b);            
            expect(resultado).toBe(resultadoEsperado);
        });
    });

    describe('dividir', () => {
        test('deve retornar a divisão de dois números', () => {
            
            const a = 6;
            const b = 3;
            const resultadoEsperado = 2;            
            const resultado = dividir(a, b);            
            expect(resultado).toBe(resultadoEsperado);
        });

        test('deve lançar um erro quando tentar dividir por zero', () => {
            
            const a = 6;
            const b = 0;            
            expect(() => dividir(a, b)).toThrow("Divisão por zero não é permitida.");
        });
    });
});