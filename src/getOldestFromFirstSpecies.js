const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const findFirstSpecieId = employees.find((specie) => specie.id === id).responsibleFor[0];
  const list = species.find((specie) => specie.id === findFirstSpecieId).residents;
  const olderSpecie = list.reduce((acc, specie) => {
    if (acc.age > specie.age) {
      return acc;
    }
    return specie;
  }, 0);

  return [olderSpecie.name, olderSpecie.sex, olderSpecie.age];
}
// console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
module.exports = getOldestFromFirstSpecies;
