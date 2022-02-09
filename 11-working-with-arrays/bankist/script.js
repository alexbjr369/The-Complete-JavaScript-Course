const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// 1.1 get all movements and create a new array with all values
// const bankDepositSum = accounts.map(acc => acc.movements);
// console.log(bankDepositSum); // result: [Array(8), Array(8), Array(8), Array(8)]

// 1.2. get all different 'movements' arrays out of the 'accounts' array and them putting them into an one flat array
// const bankDepositSum = accounts.map(acc => acc.movements).flat();
// console.log(bankDepositSum); // result: [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

// 1.3. simplifying
// const bankDepositSum = accounts.flatMap(acc => acc.movements);
// console.log(bankDepositSum); // result: [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

// 1.4. filtering for the positive values and adding them together
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0);
// console.log(bankDepositSum); // result: [200, 450, 3000, 70, 1300, 5000, 3400, 8500, 200, 340, 50, 400, 430, 1000, 700, 50, 90]

// 1.5. adding them together
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum); // result: 25180

// 2.1 get deposits over 1000
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length;
console.log(numDeposits1000); // result: 5
