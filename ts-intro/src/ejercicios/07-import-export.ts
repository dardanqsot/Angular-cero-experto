import { calculaISV, Producto } from './06-desestructuracion-funcion'; //Se coloca la ubicacion y no es necesario colocar el .ts
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    },
];

const [total, isv] = calculaISV( carritoCompras );  //Desestructuracion de arrays


console.log( 'Total', total );
console.log( 'ISV', isv )


