const personPrototype = {
  firstName: 'Daniel',
  lastName: 'Sobrinho',
  age: 26,

  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = 'Sagui';
console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());
