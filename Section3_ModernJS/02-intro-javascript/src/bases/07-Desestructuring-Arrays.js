const characters = ['Goku', 'Batman','Superman'];

const [ , , p2 ] = characters;

console.log(p2)


const returnArray = () => {
  return ['ABC', 123]
}

const [letters, numbers] = returnArray();
console.log(letters, numbers)

// Homework
// 1. The first value of the array shall be called name
// 2. The second one will be called setName
const useState = (value) => {
  return [value, () =>{console.log('Hello World')}];
}

const [name, setName] = useState('Goku');

console.log(name);
setName();