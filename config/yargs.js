const argv = require('yargs').option('b',{
    alias: 'base',
    type:'number',
    demandOption: true
}).check((argv,options)=>{
    if( isNaN(argv.b)){
        throw 'la base tiene que ser un número' 
    }
    return true
}).argv


const listar = require('yargs').option('l',{
    alias: 'listar',
    type:'boolean',
    required: false
}).argv


const hasta = require('yargs').option('h',{
    alias: 'hasta',
    type:'boolean',
    required: false
}).argv

module.exports = {
    argv
}