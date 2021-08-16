
/*
    ===== Código de TypeScript =====
*/

let habilidades: string[]= ['bash', 'counter','healing'];

habilidades.push('nuevo');

interface Personaje {//ES PARA asegura cla estructura de un objeto
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje:Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['bash', 'counter','healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.log(personaje);