// Destructuring
// Destructure asignation

const person = {
  name: 'Rafael',
  age: 22,
  pwrd: 'Anguiano',
  range: 'Soldier',
};
// Doesn't matter the order of extraction
const {name, age, pwrd} = person;

console.log(name);
console.log(age);
console.log(pwrd);

// const returnPerson = ({name, age, pwrd, range = 'Captain'}) => {
//   console.log(age, pwrd, name, range);
// }
// const returnPerson = (user) => {
//   const {age, pwrd, name} = user;
//   console.log(age, pwrd, name);
// }

// returnPerson(person)


// const useContext = ({name, age, pwrd, range = '(
//     return {
//       alias: pwrd,
//       newAge: age
//     }
//   )'
// }
// const avanger = useContext(person);
// console.log(avenger)