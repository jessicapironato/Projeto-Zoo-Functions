const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('caso receba nenhum parâmetro, é necessário retornar undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });

  it('caso receba parametro diferente de string, retorne Parâmetro inválido, é necessário uma string', () => {
    const actual = handlerElephants(1);
    const expected = ('Parâmetro inválido, é necessário uma string');
    expect(actual).toEqual(expected);
  });

  it('caso receba parametro um elemento contido no array formado pelos objetos, retorne o resultado do parametro', () => {
    const actual = handlerElephants('id');
    const expected = ('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(actual).toEqual(expected);
  });

});
