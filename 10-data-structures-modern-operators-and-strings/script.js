'use strict';

let f;
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(() => {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start boarding im ${wait} seconds`);
};

boardPassengers(180, 3);
// result: Will start boarding im 3 seconds
// result: (after 3s) We are now boarding all 180 passengers.
// result: (after 3s) There are 3 groups, each with 60 passengers.
