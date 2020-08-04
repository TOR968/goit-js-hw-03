const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line

  let maxTask = '';
  let task = '';
  for (let i = 0; i < Object.values(employees).length; i += 1) {
    if (maxTask < Object.values(employees)[i]) {
      maxTask = Object.values(employees)[i];
      task = Object.keys(employees)[i];
    }
  }
  return task;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// ('lux');
