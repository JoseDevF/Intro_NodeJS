const numeros = [10, 15, 21, 22, 23, 45, 49, 55, 70, 100];
const buscar = 56;

/* Terminar la función de busqueda binaria */
function binarySearchAlternative(array, target) {
    let start = 0; // El inicio del rango de busqueda
    let end = array.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        /* Completar esto, recuerden regresar un valor siempre */
        if (array[middle] === target) {
            return middle;
        } else if (array[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

const indice = binarySearchAlternative(numeros, buscar)
console.log(indice);
if (indice > -1)
    console.log(numeros[indice]);