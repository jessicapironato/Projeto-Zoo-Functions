const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids === undefined) {
    return [];
  }
  const parametroDeclarado = ids.map((elemento) =>
    species.find((specie) => specie.id === elemento));
  return parametroDeclarado;
};
getSpeciesByIds();
console.log(getSpeciesByIds());
console.log(getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));
module.exports = getSpeciesByIds;
