const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line
  let sumSalary = 0;
  for (let i = 0; i < Object.values(employees).length; i += 1) {
    sumSalary += Object.values(employees)[i];
  }
  return sumSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
