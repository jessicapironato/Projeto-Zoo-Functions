const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('caso receba nenhum parâmetro, é necessário retornar um objeto', () => {
    const actual = getOpeningHours();
    const expected = ({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
    expect(actual).toEqual(expected);
  });
  it('caso receba um valor fora do horário de abertura, retorne fechado', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = ('The zoo is closed');
    expect(actual).toEqual(expected);
  });
  it('caso receba um valor dentro do horário de funcionamento, retorne aberto', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = ('The zoo is open');
    expect(actual).toEqual(expected);
  });
  it('caso receba um valor fora do horário de funcionamento, retorne fechado', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = ('The zoo is closed');
    expect(actual).toEqual(expected);
  });
  it('caso receba um valor de hora inválido, retorna um erro', () => {
    expect(() => { getOpeningHours('Saturday', 'C9:00-AM'); }).toThrow(new Error('The hour should represent a number'));
  });
  it('caso receba um valor de AM/PM inválido, retorna um erro', () => {
    expect(() => { getOpeningHours('Friday', '09:00-ZM'); }).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('caso receba um valor de dia inválido, retorna um erro', () => {
    expect(() => { getOpeningHours('Tu', '09:00-AM'); }).toThrow(new Error('The day must be valid. Example: Monday'));
  });
  it('caso receba um valor de hora acima de 12, retorna um erro', () => {
    expect(() => getOpeningHours('Friday', '16:00-PM')).toThrow(new Error('The hour must be between 0 and 12'));
  });
  it('caso receba um valor de minutos acima de 60, retorna um erro', () => {
    expect(() => getOpeningHours('Friday', '12:61-PM')).toThrow('The minutes must be between 0 and 59');
  });
});
