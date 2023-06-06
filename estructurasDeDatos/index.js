// Como pasar de una clase a una función
class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = `${firstName} ${lastName}`
  }

  hi () {
    return `Hola ${this.fullName}`
  }
}

const Hugo = new Person('Hugo', 'Prieto')

console.log(Hugo.hi())

function PersonFunc (firstName, lastName) {
  const fullName = `${firstName} ${lastName}`

  function hi () {
    return `Hola ${fullName}`
  }

  return {
    hi
  }
}

const Estefania = PersonFunc('Estefania', 'Hernandez')

console.log(Estefania.hi())
