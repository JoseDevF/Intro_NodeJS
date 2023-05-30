const persona = {
    nombre: "José",
    apellido: "Hernández",
    escolaridad: "Licenciatura",
    edad: 28
};

console.log("Hola soy " + persona.nombre + " " + persona.apellido + " y tengo " + persona.edad + " de edad");

const numbers = [1, 2, 3];
console.log("Numeros: " + [...numbers, 5]);

console.log("Escolaridad: ", persona?.escolaridad ?? "Bachillerato");
console.log("😄");

function getPersonaEdad({ nombre, apellido, escolaridad, edad }) {
    return edad;
}

/* Arrow functions */
const getPersonaEdadEnMeses = persona => ({ ...persona, edadMeses: persona.edad * 12 })
//const getPersonaEdadEnMeses = edad => edad*12;
/* const getPersonaEdadEnMeses = edad => {
    return edad*12;
} */


console.log(getPersonaEdadEnMeses(persona));