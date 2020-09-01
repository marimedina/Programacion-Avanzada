//Juego 
function Jugador(nombre) {
    this.nombre = nombre
    this.pv = 40
    this.sp = 40
}

Jugador.prototype.tirarFlecha = function(Oponente) {
    if (this.sp < 20) {
        console.log(`${this.nombre} no tiene puntos de vida suficientes para utilizar las flechas`);
    }
    else {
        this.sp = this.sp - 20
        console.log(`${this.nombre} ha tirado una flecha`);
        Oponente.pv -= 20;
    }
}

Jugador.prototype.curar = function(Oponente) {
    Oponente.pv += 10;
    this.sp -= 10;
    console.log(`${Oponente.nombre} recibió 10 puntos`);
}

var orco = new Jugador("Orco");
var legolas = new Jugador("Legolas");
console.log(orco);
console.log(legolas);