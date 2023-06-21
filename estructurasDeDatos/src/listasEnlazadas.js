function Node (value) {
  return {
    value,
    next: null
  }
}

function LinkedList () {
  let head = null

  const add = (value) => {
    const node = Node(value)

    if (head === null) {
      head = node
    } else {
      let currentNode = head

      while (currentNode.next !== null) {
        currentNode = currentNode.next
      }

      currentNode.next = node
    }
  }

  const show = () => {
    let currentNode = head

    while (currentNode !== null) {
      console.log(currentNode.value + ' ' + currentNode.next?.value)
      currentNode = currentNode.next
    }
  }

  const size = () => {
    let count = 0
    let currentNode = head

    while (currentNode !== null) {
      count++
      currentNode = currentNode.next
    }

    console.log(count)
  }

  return {
    add,
    show,
    size
  }
}

const list = LinkedList()
list.add('a')
list.add('b')
list.add('c')
list.add('d')

list.show()
list.size()
