/* 
Rango:

Maestro de la Orden[3]
Maestro Jedi[2]
Caballero Jedi[2]
Padawan[2]
Iniciado Jedi[4]

Estadisticas:

Poder
Velocidad
Salud
*/

/* Arreglo de jedis inicializado en un arreglo vacío */
const arregloJedis = []

/*Obteniendo el formulario desde el DOM (desde el html), a través del ID*/
const form = document.querySelector('#characterRegistry');

/* Manejador de evento */
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente

    /* Almacenando la información del formulario, en un objeto de javascript */
    const character = {
        name: form.name.value,
        age: Number(form.age.value),
        team: form.team.value
    };

    if (validateCharacter(character)) {
        arregloJedis.push(character);
        updateJediList();
        console.log(arregloJedis);
    } else {
        alert("Tienes un dato vacío, verificalo");
        event.stopPropagation();
    }
})

/*
Maestro de la Orden: 5
Maestro Jedi: 4
Caballero Jedi: 3
Padawan: 2
Iniciado Jedi: 1
*/

const setRole = (jedi, role) => {
    const roles = {
        5: "Maestro de la Orden",
        4: "Maestro Jedi",
        3: "Caballero Jedi",
        2: "Padawan",
        1: "Iniciado Jedi"
    }
    const validRole = roles[role];
    console.log(validRole);
    if (validRole) {
        return {
            ...jedi,
            role: validRole
        }
    } else {
        return {
            ...jedi,
            role: "Desconocido"
        }
    }
}

/* Validamos que no haya propiedades vacías */
const validateCharacter = ({ name = "", age = 0, team = "" }) => name !== "" && age !== 0 && team !== ""; //Regresa un booleano


const updateJediList = () => {
    const jediList = document.querySelector('#jediList');
    jediList.innerHTML = ''; // Limpiamos el contenido existente

    arregloJedis.forEach(jedi => {
        const row = `
        <tr>
          <td>${jedi.name}</td>
          <td>${jedi.age}</td>
          <td>${jedi.team}</td>
        </tr>
      `;

        jediList.innerHTML += row;
    });
};


// Función para actualizar la lista de Jedis en el cuerpo de la tabla
/* const updateJediList = () => {
    const jediList = document.querySelector('#jediList');
    jediList.innerHTML = ''; // Limpiamos el contenido existente

    arregloJedis.forEach(jedi => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = jedi.name;

        const ageCell = document.createElement('td');
        ageCell.textContent = jedi.age;

        const teamCell = document.createElement('td');
        teamCell.textContent = jedi.team;

        row.appendChild(nameCell);
        row.appendChild(ageCell);
        row.appendChild(teamCell);

        jediList.appendChild(row);

    });
}; */


