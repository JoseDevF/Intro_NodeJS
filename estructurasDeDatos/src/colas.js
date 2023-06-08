function Queue () {
  const items = []

  const enqueue = (item) => items.push(item)

  const dequeue = () => items.shift()

  const peek = () => items[0]

  const size = () => items.length

  const isEmpty = () => items.length === 0

  const getItems = () => structuredClone(items)

  return {
    enqueue,
    dequeue,
    peek,
    size,
    isEmpty,
    getItems
  }
}

const cola = Queue()
cola.enqueue(1)
cola.enqueue(2)
cola.enqueue(3)
cola.enqueue(4)
cola.enqueue(5)
console.log(cola.getItems())
cola.dequeue()
console.log(cola.getItems())
