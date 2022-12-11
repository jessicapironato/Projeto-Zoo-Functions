const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

const getOfficeHours = (day) => {
  if (day[1].open === 0 && day[1].close === 0) {
    return 'CLOSED';
  }
  return `Open from ${day[1].open}am until ${day[1].close}pm`;
};

const getExhibition = (day) => {
  if (day[1].open === 0 && day[1].close === 0) {
    return 'The zoo will be closed!';
  }
  return species.filter((specie) =>
    specie.availability.includes(day[0])).map(({ name }) => name);
};

const getSchedules = (dayofWeek) => {
  if (dayofWeek === undefined) {
    const all = {};
    Object.entries(hours).forEach((day) => {
      all[day[0]] = {
        officeHour: getOfficeHours(day),
        exhibition: getExhibition(day),
      };
    });
    return all;
  }
  const day = Object.entries(hours).find((hour) => hour[0] === dayofWeek);
  return {
    [dayofWeek]: {
      officeHour: getOfficeHours(day),
      exhibition: getExhibition(day),
    },
  };
};

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === undefined) {
    return getSchedules();
  }

  if (hours[scheduleTarget] !== undefined) {
    return getSchedules(scheduleTarget);
  }

  const specie = species.find((animal) => animal.name === scheduleTarget);
  if (specie === undefined) {
    return getSchedules();
  }
  return specie.availability;
};

module.exports = getSchedule;
