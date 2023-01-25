const { describe, expect } = require("@jest/globals");
const { imprimirSaludo, datosSaludo} = require("../app/P&C_N1_E2");

describe('Test Promises & Callbacks', () => {

test('Test full name', () => {
    function datosSaludo(data) {
    expect(data).toStrictEqual('Aitor Zamora');
    done();
  }
  imprimirSaludo(datosSaludo);
})

test('Test throw error', () => {
  expect(() => {datosSaludo('A','Z')}).toThrowError('Introduce a correct name');
  expect(() => {datosSaludo('Z')}).toThrowError('Introduce a correct name');
  expect(() => {datosSaludo()}).toThrowError('Introduce a correct name');
  expect(() => {datosSaludo(1,2)}).toThrowError('Introduce a correct name');
})
})


