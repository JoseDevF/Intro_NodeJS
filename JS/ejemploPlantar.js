class Invernadero {
    constructor(sistema_riego, control_temperatura, surcos, plantas) {
        this.sistema_riego = sistema_riego;
        this.control_temperatura = control_temperatura;
        this.surcos = surcos;
        this.plantas = plantas;
    }

    regar() {
        console.log("Regando")
    }
}

class Agronomo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    plantar(planta, invernadero) {
        console.log(`Plantando... ${planta.especie}`);
        invernadero.plantas += 1;
    }
}

class Planta {
    constructor(especie) {
        this.especie = especie;
    }
}

const plantaHortencia = new Planta("H. macrophylla");
const invernaderoTrasero = new Invernadero(true, true, 10, 5);
const jose = new Agronomo("José Hernández");
console.log("PLANTAS EN INVERNADERO ANTES: ", invernaderoTrasero.plantas);

jose.plantar(plantaHortencia, invernaderoTrasero);
console.log("PLANTAS EN INVERNADERO: ", invernaderoTrasero.plantas);