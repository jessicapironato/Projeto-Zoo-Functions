const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((element) => {
    const { firstName, lastName } = element;
    return firstName === employeeName || lastName === employeeName;
  });
};
getEmployeeByName();
module.exports = getEmployeeByName;
// console.log(getEmployeeByName('Wishart'));
