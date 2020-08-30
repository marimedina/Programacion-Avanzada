//establece this usando call
function saludar() {
    console.log(`Hola soy ${this.name} ${this.lastName}`);
}

const maria = {
    name: 'Maria',
    lastName: 'Jose'
};

saludar.call(maria);

function caminar(metros, dir) {
    console.log(`${this.name} camina ${metros} metros hacia ${dir}`);
};

caminar.call(maria, 400, "oeste");



//Establecer this usando apply y pasar argumentos
const valores = [800, 'sur']
caminar.apply(maria, valores);

//caminar.apply(maria, [500,'Este']);




//Establecer this en una fun usando bind

const daniel = {name: 'Daniel', lastName: 'Medina'};
const danielSaluda = saludar.bind(daniel);
danielSaluda();

const danielCamina = caminar.bind(daniel);
danielCamina(1000, 'este');