// function greet(name){
//   return `Hello ${name}`;
// }
const greet = function greet(name){
  return `Hello ${name}`;
}
const greet2 = (name) => {
  return `Hello ${name}`;
}
const greet3 = (name) => `Hello ${name}`;
const greet4 = () => `Hello World`;

// console.log(greet('Goku'));

console.log(greet('Goku'))
console.log(greet2('Batman'))
console.log(greet3('Superman'))
console.log(greet4())

// const getUser = () => {
//   return {
//     uid: 'ABC123',
//     username: 'El_Primo',
//   }
// }
const getUser = () => (
  {
    uid: 'ABC123',
    username: 'El_Primo',
  }
)

const user = getUser();

console.log(user);

//Homework
// 1. Tranform to an Arrow Function
// 2. Return an Implicit Object
// 3. Proves

// function getActiveUser(name){
//   return {
//     uid: 'ABC567',
//     username: name
//   }
// };

// const activeUser = getActiveUser('Rafael');
// console.log(activeUser);


const getActiveUser = (name) => (
  {
    uid: 'ABC567',
    username: name
  }
);

const activeUser = getActiveUser('Rafael');
console.log(activeUser);