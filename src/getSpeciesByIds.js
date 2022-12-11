const { species } = require('../data/zoo_data');
// const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids === undefined) {
    return [];
  }
  return ids.map((id) => species.find((specie) => specie.id === id));
};

getSpeciesByIds();
// console.log(getSpeciesByIds());
// console.log(getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));

module.exports = getSpeciesByIds;
