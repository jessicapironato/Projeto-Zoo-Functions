const { employees } = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
};
getEmployeeByName();
module.exports = getEmployeeByName;
// console.log(getEmployeeByName('Wishart'));
