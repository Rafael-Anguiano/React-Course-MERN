
const name = `Rafael`;
const last_name = `Anguiano`;

// const fullName = name + ' ' + last_name;
const fullName = `${name} ${last_name}`

console.log(fullName);

function getSalut (name) {
  return 'Hello ' + name;
}

console.log(`This is a text: ${getSalut(name)}`)