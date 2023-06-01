class Largometraje {
    constructor(duracion, clasificacion, formato, nombre) {
        this.duracion = duracion;
        this.clasificacion = clasificacion;
        this.formato = formato;
        this.nombre = nombre;
    }
}

class Pelicula extends Largometraje {
    constructor(genero, duracion, clasificacion, formato, nombre) {
        super(duracion, clasificacion, formato, nombre);
        this.genero = genero;
    }
    /* reproducirPelicula() {
        console.log(`Reproduciendo ${this.nombre}`)
    } */
}

class Documental extends Largometraje {
    constructor(opiniones_expertos, duracion, clasificacion, formato, nombre) {
        super(duracion, clasificacion, formato, nombre);
        this.opiniones_expertos = opiniones_expertos;
    }

    /* reproducirDocumental() {
        console.log(`Reproduciendo ${this.nombre}`)
    } */
}

class Cine {
    constructor(salas, taquillas, videojuegos, dulceria) {
        this.salas = salas;
        this.taquillas = taquillas;
        this.videojuegos = videojuegos;
        this.dulceria = dulceria;
    }

    reproducir(largometraje) {
        console.log("Reproduciendo: ", largometraje.nombre);
    }
}

const peliculaMegamente = new Pelicula("animado", 90, "A", "16:4", "Megamente");
const documentalSirenas = new Documental("fantasía", 120, "B", "16:4", "Sirenas: Del mito a la realidad");
const cineAeropuerto = new Cine(12, 2, false, true);
/* 1 */
cineAeropuerto.reproducir(peliculaMegamente);
cineAeropuerto.reproducir(documentalSirenas);

/* 2 */
/* peliculaMegamente.reproducirPelicula();
documentalSirenas.reproducirDocumental(); */