// Después de insertar el json en la BBDD ir a models/landing y cambiar mass de Number a String.
//Descomentar el fichero y ejecutarlo, una vez ejecutado volver a conectar
//Ir a models/landing y cambiar de nuevo mass de String a Number


// const Landing = require('./models/landing');

// const toNumber = async() => {
//     await Landing.updateMany(
//         { 'mass' : { $type: 2 }},
//         [{ $set: { 'mass': { $toDouble: '$mass' } } }]
//         )
// }
// toNumber()