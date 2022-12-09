const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const { residents } = species.find(({ name }) => name === animal);
  return residents.every((element) => element.age >= age);
};

console.log(getAnimalsOlderThan('bears', '2'));
module.exports = getAnimalsOlderThan;
