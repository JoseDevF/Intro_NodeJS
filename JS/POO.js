/* Objetos  */

// Crear un objeto utilizando la sintaxis de llaves
const mano = {
    dedos: 5,
    unias: true,
    palma: 1,
    nudillos: 14
}

const persona = {
    /* Que caracteristicas tiene */
    nombre: 'Juan',
    edad: 30,
    mano_izquierda: { ...mano },
    mano_derecha: { ...mano, dedos: 4 },//Sustituir un valor
    /* Que puede hacer */
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    },
    describirse() {
        for (prop in this) {
            console.log(`${prop}: ${this[prop]}`);
        }
    }
};

persona.saludar(); // Salida: Hola, mi nombre es Juan
persona.describirse();
console.log("PERSONA: ", persona);



/* Funciones constructoras */

// Definir una función constructora
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function () {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    };
}

// Crear una instancia de Persona
const fechaActual = new Date();
console.log(`Fecha actual: `, fechaActual.toLocaleDateString());
const persona1 = new Persona('Juan', 30);
persona1.saludar(); // Salida: Hola, mi nombre es Juan


/* Prototipos */
// Agregar un método al prototipo de Persona
Persona.prototype.despedirse = function () {
    console.log(`Adiós, ${this.nombre} se despide`);
};

String.prototype.imprimir = function () {
    console.log(this);
}

const cadenaPrueba = "Hola mundo"; /* -> String */
cadenaPrueba.imprimir();

persona1.despedirse(); // Salida: Adiós, Juan se despide

/*
 
Buenas prácticas:
Utiliza nombres de clases y métodos descriptivos para facilitar la comprensión del código.
Divide el código en módulos y clases para mantenerlo organizado y reutilizable.
Aplica el principio de encapsulación, manteniendo los datos internos de un objeto ocultos y proporcionando métodos para acceder y modificar esos datos.
Utiliza la herencia y la composición para reutilizar y extender el código.
Evita el acoplamiento excesivo entre objetos, promoviendo la modularidad y la baja dependencia.
 
 */

/* Clases */

// Definir una clase Persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

// Crear una instancia de Persona
const persona1 = new Persona('Juan', 30);
persona1.saludar(); // Salida: Hola, mi nombre es Juan


// Clase padre
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

// Clase hija que hereda de Persona
class Estudiante extends Persona {
    constructor(nombre, grado) {
        super(nombre);
        this.grado = grado;
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando en el grado ${this.grado}`);
    }
}

// Crear una instancia de Estudiante
const estudiante1 = new Estudiante('Pedro', 8);
estudiante1.saludar(); // Salida: Hola, mi nombre es Pedro
estudiante1.estudiar(); // Salida: Pedro está estudiando en el grado 8
