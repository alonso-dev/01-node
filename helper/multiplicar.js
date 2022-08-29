const fs = require('fs')
var colors = require('colors');
var colors = require('colors/safe');

const crearArchivo = (base = 5, listar=false, hasta = 12 ) => {
    let salida = ''
    for(let i=1; i <= hasta; i++ ) {
        salida += `${base} x ${i} = ${base * i} \n`
    }
    fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) =>{
        if(err) throw err;
    })
    console.log(`table-${base}.txt creado`.random)
    if(listar){
        console.log('================='.random)
        console.log('Tabla del'.random,colors.bold(base))
        console.log('================='.random)
       console.log(salida.random)
    }
}

// const createArchivo = (base = 5) => {
// return new Promise(() => {
//     console.log('=================')
//     console.log('Tabla del',base)
//     console.log('=================')

//     let salida = ''
//     for(let i=1; i <= 10; i++ ) {
//         salida += `${base} x ${i} = ${base * i} \n`
//     }
//     let file = `tabla-${base}.txt`
//     fs.writeFile(file, salida, (err) =>{
//         if(err) throw err;
//         console.log(`table-${base}.txt creado`)
//     })
//     if (success) {
//       console.log (`${file}`)
//     } else {
//      console.log(err)
//     }
//   });
// }

module.exports = {
    crearArchivo
}