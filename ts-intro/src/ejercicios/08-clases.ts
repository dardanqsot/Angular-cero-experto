/*
    ===== Código de TypeScript =====
*/

// Las clases me sirven para crear instancias
class PersonaNormal {

    constructor( // es una funciones que se va a llamar cuando creo una instancia de mi clase (new Clase)
        public nombre: string, // se usa para reducir codigo , nombre es un atributo de la clase : this.nombre = nombre
        public direccion: string //con el public hace ambos a la vez
    )  {}

}


class Heroe extends PersonaNormal {

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string  // con static puedo acceder al atributo sin crear instancia de la clase
    ) {
        super( nombreReal, 'New York, USA' );
    }

}

const ironman = new Heroe('Ironman',45, 'Tony');

console.log(ironman);