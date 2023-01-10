import { imprimirSaludo } from "../app/P&C_N1_E2";

test('Test full name', () => {

    function datosSaludo(data) {
    expect(data).toBe('Aitor Zamora');
    done();
  }

  imprimirSaludo(datosSaludo);
})




