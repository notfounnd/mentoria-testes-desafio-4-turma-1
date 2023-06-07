const {
  verifyAgeGroup,
  printPerson,
  countPeople,
} = require('./src/verify-group');

const myGroup = [
  {
    name: 'test 1',
    age: '11',
    mail: 'teste1@mail.com',
  },
  {
    name: 'test 2',
    age: '11',
    mail: 'teste2@mail.com',
  },
  {
    name: 'test 3',
    age: '12',
    mail: 'teste3@mail.com',
  },
  {
    name: 'test 4',
    age: '16',
    mail: 'teste4@mail.com',
  },
  {
    name: 'test 5',
    age: '17',
    mail: 'teste5@mail.com',
  },
  {
    name: 'test 6',
    age: '18',
    mail: 'teste6@mail.com',
  },
];

myGroup.forEach((el) => {
  printPerson(el);
  console.log(verifyAgeGroup(el.age));
  console.log('');
});

console.log(`Quantidade de pessoas na lista: ${countPeople(myGroup)}`);
