const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const { residents } = species.find((specie) => specie.name === animal);
  return residents.every((resident) => resident.age >= age);
};

console.log(getAnimalsOlderThan('bears', '2'));
module.exports = getAnimalsOlderThan;
