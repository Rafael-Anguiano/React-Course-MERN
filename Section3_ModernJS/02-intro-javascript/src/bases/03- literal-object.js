const person ={
  name: 'Rafael',
  last_name: 'Anguiano',
  age: 22,
  direction: {
    city: 'Zapopan',
    zipCode: 28649,
    lat: 14.3232,
    lng: 34.1414,
  },
}

// console.table( { person } );
console.log( person );

// {person} === person: person


// const person2 = person; //Just copying the reference

const person2 = {...person};

person2.name = 'Peter'

console.log(person);
console.log(person2);