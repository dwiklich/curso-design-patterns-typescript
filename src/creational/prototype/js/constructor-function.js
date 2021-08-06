function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Daniel',
  lastName: 'Sobrinho',
  age: 26,

  fullName() {
    return this.firstName + ' ' + this.lastName;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'Oie';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Jose', 'Rodriguez', 40);
console.log(person1);
console.log(person1.firstName);
console.log(person1.fullName());

console.log('------------------------');

const person2 = new SubPerson('Ana', 'Maria', 30);
console.log(person2);
console.log(person2.firstName);
console.log(person2.fullName());
console.log(person2.fromSubClass);
