//metodos o funciones dentro de un objeto

const Superman = {
    nombre: 'Clarck Kent',
    edad: 45,
    poderes: 'destruccion masiva',
    debilidad: 'Criptonita',
    muerte: true,

    mostrarInfo: function () {
        console.log(`${this.nombre} su poder es ${this.poderes}
         y su debilidad es ${this.debilidad}`);
    }

}
 Superman.mostrarInfo();
