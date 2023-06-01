function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function () {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    };
}

/* Prototipos */
// Agregar un método al prototipo de Persona
Persona.prototype.despedirse = function () {
    console.log(`Adiós, ${this.nombre} se despide`);
};

String.prototype.imprimir = function () {
    console.log(this);
}

const persona1 = new Persona("José", 28);

const cadenaPrueba = "Hola mundo"; /* -> String */
cadenaPrueba.imprimir();

persona1.despedirse(); // Salida: Adiós, Juan se despide