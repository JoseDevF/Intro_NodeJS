function Pila () {
  const items = []

  // agregar
  function push (item) {
    items.push(item)
  }
  // borrar
  function pop () {
    items.pop()
  }
  // calcular el ultimo
  function peek () {
    return items[items.length - 1]
  }
  // longitud
  const size = () => items.length
  // llamar todos los valores
  function getItems () {
    return items
  }
  // validar si esta vacio
  const isEmpty = items.length === 0

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

console.log(pila.isEmpty)
pila.push('a')
pila.push('b')
pila.push('c')
console.log(pila.getItems())
