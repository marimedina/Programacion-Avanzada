//Destructuracion de objetos (extraer objetos)

const aprendiendoJS = {
    version: {
        nueva: 'ES6+',
        ant: 'ES5'
    },
    frameworks: ['react', 'vueJS', 'angular']
}

console.log(aprendiendoJS);

//Destructuracion c/version anterior

/*let version = aprendiendoJS.version;
console.log(version);*/


//Destruc forma nueva

let {version, frameworks} = aprendiendoJS;
console.log(version);
console.log(frameworks);

