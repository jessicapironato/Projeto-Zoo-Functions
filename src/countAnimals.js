const { species } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    return species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
  }

  const { residents } = species.find(({ name }) => name === animal.species);

  if (animal.sex) {
    const filter = residents.filter((resident) => resident.sex === animal.sex);
    return filter.length;
  }
  return residents.length;
};
console.log(countAnimals());

module.exports = countAnimals;
