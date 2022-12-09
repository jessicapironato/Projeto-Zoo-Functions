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

  it('caso receba parametro um elemento contido no array formado pelas chaves, retorne o resultado do parametro', () => {
    const actual = handlerElephants('id');
    const expected = ('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(actual).toEqual(expected);
  });

  it('caso receba parametro count, retorne o tamanho do array de residentes', () => {
    const actual = handlerElephants('count');
    const expected = (4);
    expect(actual).toBe(expected);
  });

  it('caso receba parametro names, retorne os nomes dos residentes', () => {
    const actual = handlerElephants('names');
    const expected = (['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(actual).toEqual(expected);
  });

  it('caso receba parametro averageAge, retorne a média dos residentes', () => {
    const actual = handlerElephants('averageAge');
    const expected = (10.5);
    expect(actual).toBe(expected);
  });

  it('caso receba um parametro diferente do esperado, retorne null', () => {
    const actual = handlerElephants('teste');
    const expected = null;
    expect(actual).toBe(expected);
  });
});
