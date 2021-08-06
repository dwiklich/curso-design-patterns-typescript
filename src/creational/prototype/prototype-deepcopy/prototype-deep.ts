interface Prototype {
  clone(): Prototype;
}

class Addresses implements Prototype {
  constructor(
    public rua: string,
    public bairro: string,
    public numero: number,
  ) {}
  clone(): Addresses {
    return new Addresses(this.rua, this.bairro, this.numero);
  }
}

export class Person implements Prototype {
  private _addresses: Addresses[] = [];
  public teste: string;
  constructor(public name: string, public age: number) {
    this.teste = 'O teste';
  }

  clone(): Person {
    const personClone = new Person(this.name, this.age);
    personClone._addresses = [...this._addresses.map((item) => item.clone())];
    return personClone;

    // const clone = JSON.parse(JSON.stringify(personClone));
    // return clone;
  }

  get addresses(): Addresses[] {
    return this._addresses;
  }

  addAddresses(address: Addresses): void {
    this._addresses.push(address);
  }
}

const addresses1 = new Addresses('José Passador', 'Jd. Mauá', 6);
const addresses2 = new Addresses('Donatelo Forte', 'Jd. Itapeva', 290);
const addresses3 = new Addresses('Outra RUA', 'Outro Bairro', 99999);

const person1 = new Person('Daniel', 26);
console.log(person1);
person1.addAddresses(addresses1);
const person2 = person1.clone();
console.log(person1 === person2);
person2.name = 'Sagui';

console.log(person2);
console.log(person1);

person2.teste = 'Outro teste';

// person2.addAddresses(addresses2);
person1.addAddresses(addresses3);
person1.addresses[0].rua = 'aaaa';
person2.addAddresses(addresses2);

console.log('-------------------');

console.log(person1);
console.log(person2);
