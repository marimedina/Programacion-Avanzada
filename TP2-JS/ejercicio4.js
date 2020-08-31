//Juego 
function Jugador(nombre) {
    this.nombre = nombre
    this.pv = 500
    this.sp = 500
}

Jugador.tirarFlecha = function(Jugador) {
    if (Jugador.pv < 20) {
        console.log(`${Jugador.nombre} no tiene puntos de vida suficientes para utilizar las flechas`);
    }
    else {
        Jugador.pv = Jugador.pv - 20
        console.log(`${Jugador.nombre} ha tirado una flecha`);
    }
}

Jugador.curar = function(Jugador) {
    Jugador.pv += 10;
    console.log(`${Jugador.nombre} recibió 10 puntos`);
}

var orco = new Jugador("Orco");
var legolas = new Jugador("Legolas");
console.log(orco);
console.log(legolas);