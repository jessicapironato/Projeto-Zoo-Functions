const { prices } = require('../data/zoo_data');
// iniciando projeto

const countEntrants = (entrants) => {
  const counter = { adult: 0, child: 0, senior: 0 };
  entrants.forEach(({ age }) => {
    switch (true) {
    case age < 18:
      counter.child += 1;
      break;
    case age >= 18 && age < 50:
      counter.adult += 1;
      break;
    default:
      counter.senior += 1;
    }
  });
  return counter;
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const counter = countEntrants(entrants);

  return counter.adult * prices.adult + counter.child * prices.child
    + counter.senior * prices.senior;
};

module.exports = { calculateEntry, countEntrants };
