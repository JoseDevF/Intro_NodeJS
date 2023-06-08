function Pila () {
  const items = []

  // agregar
  const push = (item) => items.push(item)
  // borrar
  const pop = () => items.pop()
  // calcular el ultimo
  const peek = () => items[items.length - 1]
  // longitud
  const size = () => items.length
  // llamar todos los valores
  const getItems = () => structuredClone(items)
  // validar si esta vacio
  const isEmpty = () => items.length === 0

  return {
    push,
    pop,
    peek,
    size,
    getItems,
    isEmpty
  }
}

const newPila = Pila()

console.log(newPila.isEmpty())
newPila.push(1)
newPila.push(2)
newPila.push(3)
newPila.push(4)
newPila.push(10)
newPila.push(20)
console.log(newPila.size())
console.log(newPila.getItems())
console.log(newPila.isEmpty())

const user = {
  name: 'Marisol',
  isDiscount: (age) => age >= 18,
  login: true
}

console.log({ ...user, isDiscount: user.isDiscount(20) })
// const copyUser = structuredClone(user)
