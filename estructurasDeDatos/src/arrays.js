const numeros = [1, 2, 3, 4, 5]

const letras = ['a', 'b', 'c']

function recorrerArreglo (array) {
  for (const item of array) {
    console.log(item)
  }
}

letras.push('d')
recorrerArreglo(letras)
console.log(letras)
