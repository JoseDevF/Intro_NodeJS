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
  const getItems = () => [...items]
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

const pila = Pila()

console.log(pila.isEmpty())
pila.push(1)
pila.push(2)
pila.push(3)
console.log(pila.size())
console.log(pila.isEmpty())
