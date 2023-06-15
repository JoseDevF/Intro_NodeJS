// Búsqueda lineal:

function busquedaLineal(array, elemento) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return i;
    }
  }
  return -1;
}


// Búsqueda binaria:

function busquedaBinaria(array, elemento) {
  let inicio = 0;
  let fin = array.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    if (array[medio] === elemento) {
      return medio;
    } else if (array[medio] < elemento) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }

  return -1;
}

// Ordenamiento de burbuja:

function ordenamientoBurbuja(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}


// Ordenamiento por inserción:

function ordenamientoInsercion(array) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let valorActual = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > valorActual) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = valorActual;
  }

  return array;
}

// Ordenamiento por selección:

function ordenamientoSeleccion(array) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let indiceMinimo = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[indiceMinimo]) {
        indiceMinimo = j;
      }
    }

    if (indiceMinimo !== i) {
      [array[i], array[indiceMinimo]] = [array[indiceMinimo], array[i]];
    }
  }

  return array;
}

// Ordenamiento rápido (Quicksort):

function ordenamientoRapido(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[Math.floor(array.length / 2)];
  const menores = [];
  const iguales = [];
  const mayores = [];

  for (let elemento of array) {
    if (elemento < pivot) {
      menores.push(elemento);
    } else if (elemento === pivot) {
      iguales.push(elemento);
    } else {
      mayores.push(elemento);
    }
  }

  return [
    ...ordenamientoRapido(menores),
    ...iguales,
    ...ordenamientoRapido(mayores)
  ];
}

// Ordenamiento por mezcla (Mergesort):

function ordenamientoMezcla(array) {
  if (array.length <= 1) {
    return array;
  }

  const medio = Math.floor(array.length / 2);
  const mitadIzquierda = array.slice(0, medio);
  const mitadDerecha = array.slice(medio);

  return mezclar(
    ordenamientoMezcla(mitadIzquierda),
    ordenamientoMezcla(mitadDerecha)
  );
}

function mezclar(arr1, arr2) {
  let resultado = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      resultado.push(arr1[i]);
      i++;
    } else {
      resultado.push(arr2[j]);
      j++;
    }
  }

  return [...resultado, ...arr1.slice(i), ...arr2.slice(j)];
}

// Ordenamiento por montículos (Heapsort):

function ordenamientoMonticulos(array) {
  const n = array.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }

  for (let i = n - 1; i >= 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0);
  }

  return array;
}

function heapify(array, n, indicePadre) {
  let indiceMaximo = indicePadre;
  const hijoIzquierdo = 2 * indicePadre + 1;
  const hijoDerecho = 2 * indicePadre + 2;

  if (hijoIzquierdo < n && array[hijoIzquierdo] > array[indiceMaximo]) {
    indiceMaximo = hijoIzquierdo;
  }

  if (hijoDerecho < n && array[hijoDerecho] > array[indiceMaximo]) {
    indiceMaximo = hijoDerecho;
  }

  if (indiceMaximo !== indicePadre) {
    [array[indicePadre], array[indiceMaximo]] = [
      array[indiceMaximo],
      array[indicePadre]
    ];
    heapify(array, n, indiceMaximo);
  }
}


// Ordenamiento por cuenta (Counting sort):

function ordenamientoCuenta(array) {
  const n = array.length;
  let contador = [];
  let resultado = [];

  for (let i = 0; i < n; i++) {
    if (contador[array[i]] === undefined) {
      contador[array[i]] = 0;
    }
    contador[array[i]]++;
  }

  for (let i = 0; i < contador.length; i++) {
    while (contador[i] > 0) {
      resultado.push(i);
      contador[i]--;
    }
  }

  return resultado;
}

// Ordenamiento por cubetas (Bucket sort):

function ordenamientoCubetas(array, numeroCubetas = 5) {
  const n = array.length;
  let resultado = [];

  if (n === 0) {
    return resultado;
  }

  // Encontrar el valor máximo y mínimo en el array
  let valorMinimo = array[0];
  let valorMaximo = array[0];
  for (let i = 1; i < n; i++) {
    if (array[i] < valorMinimo) {
      valorMinimo = array[i];
    } else if (array[i] > valorMaximo) {
      valorMaximo = array[i];
    }
  }

  // Crear las cubetas
  const rangoCubeta = Math.ceil((valorMaximo - valorMinimo + 1) / numeroCubetas);
  const cubetas = new Array(numeroCubetas);
  for (let i = 0; i < numeroCubetas; i++) {
    cubetas[i] = [];
  }

  // Colocar los elementos en las cubetas
  for (let i = 0; i < n; i++) {
    const cubetaIndice = Math.floor((array[i] - valorMinimo) / rangoCubeta);
    cubetas[cubetaIndice].push(array[i]);
  }

  // Ordenar las cubetas y combinar los resultados
  for (let i = 0; i < numeroCubetas; i++) {
    if (cubetas[i]) {
      resultado = resultado.concat(ordenamientoCubetas(cubetas[i]));
    }
  }

  return resultado;
}

