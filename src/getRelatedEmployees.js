const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((managerRole) =>
  managerRole.managers.includes(id) === true);

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    const peopleManaged = employees.filter((people) =>
      people.managers.includes(managerId) === true);
    return peopleManaged.map((people) => `${people.firstName} ${people.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
