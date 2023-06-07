const ageGroup = {
  isChildren: () => {
    return 'crianças';
  },
  isAdolescents: () => {
    return 'adolescentes';
  },
  isAdults: () => {
    return 'adultos';
  },
  isNotAgeGroup: () => {
    return 'grupo não definido';
  },
};

function verifyAgeGroup(age) {
  if (typeof age === 'boolean') return ageGroup.isNotAgeGroup();

  return age < 12
    ? ageGroup.isChildren()
    : age < 17
    ? ageGroup.isAdolescents()
    : age >= 17
    ? ageGroup.isAdults()
    : ageGroup.isNotAgeGroup();
}

function printPerson(person) {
  if (person.name && person.mail && person.age) {
    console.log(person.name);
    console.log(person.mail);
    console.log(person.age);
  } else {
    console.log('Pessoa não configurada corretamente');
  }
}

function countPeople(people) {
  if (typeof people !== 'object') return 'objeto não definido';

  return people.length;
}

module.exports = { verifyAgeGroup, printPerson, countPeople };
