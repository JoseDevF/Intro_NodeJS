/* 
Búsqueda lineal: Supongamos que tienes un array de números y quieres encontrar un número específico en él. Si recorres el array elemento por elemento hasta encontrar el número deseado, tendrías una complejidad temporal de O(n), donde "n" es el tamaño del array. Esto se debe a que la cantidad de operaciones aumenta linealmente con el tamaño del array.
*/

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; // Encontrado
        }
    }
    return -1; // No encontrado -> Best practice
}
/*
Búsqueda binaria: Supongamos que tienes un array ordenado y quieres encontrar un número específico en él. En lugar de buscar de manera lineal, puedes dividir repetidamente el array a la mitad hasta encontrar el número deseado. Esto tiene una complejidad temporal de O(log n), donde "n" es el tamaño del array. Esto se debe a que cada vez que divides el array, reduces a la mitad la cantidad de elementos a buscar. 
*/

const numeros = [10, 15, 21, 22, 23, 45, 49, 55, 70, 100];
const buscar = 23;

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
            end = mid - 1;
        }
    }
    return -1;
}

/* De tarea se quedaran algunos algoritmos de busqueda, para traducirlos a javascript, con todo y su respectiva documentación línea a línea, eso les ayudará a saber que estamos haciendo ;) */


/*
Ordenamiento de un array: Supongamos que tienes un array desordenado y quieres ordenarlo en orden ascendente. El algoritmo de ordenamiento de burbuja (bubble sort) es un ejemplo de un algoritmo de complejidad temporal cuadrática, con una complejidad de O(n^2), donde "n" es el tamaño del array.
*/

function bubbleSort(array) {
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {// Cuantas pasadas le vamos al arreglo para ordenarlo
        for (let j = 0; j < n - i - 1; j++) {// Ordena el arreglo
            if (array[j] > array[j + 1]) {
                // Intercambiar elementos si están en el orden incorrecto
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}
