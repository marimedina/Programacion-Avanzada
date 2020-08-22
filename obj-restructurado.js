//destructuracion de objetos

const aprendiendoJS = {
    version: {
        nueva: 'ES6+',
        ant: 'ES5'
    },
    frameworks: ['react', 'vueJS', 'angular']
}

console.log(aprendiendoJS);

//Destructuracion anterior
/*let version = aprendiendoJS.version;
console.log(version);*/


//destruc forma nueva
let {version, frameworks} = aprendiendoJS;
console.log(version);
console.log(frameworks);


