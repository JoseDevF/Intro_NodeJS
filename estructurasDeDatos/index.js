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

// console.log(Hugo.hi())

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

// console.log(Estefania.hi())

/* Intro programación funcional */
// Función de primera clase
const smsSaludo = str => str
// console.log(smsSaludo('Hola mundo como parametro'))

// Función de orden superior
const funcionPrincipal = (callback, { n1, n2 }) => {
  return callback(n1, n2)
}

const suma = (n1 = 0, n2 = 0) => n1 + n2
const resta = (n1 = 0, n2 = 0) => n1 - n2

const numbers = {
  n1: 10,
  n2: 20
}

console.log(funcionPrincipal(suma, numbers))
console.log(funcionPrincipal(resta, numbers))
console.log(funcionPrincipal(resta, { n1: 20, n2: 30 }))
