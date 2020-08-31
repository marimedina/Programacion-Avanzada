//Con index.html fuera de la carpeta TP1

//Cálculo del area de un triangulo

let b = 5;
let h = 6;

function CalcularArea(b,h) {
    area = (b*h) / 2;
    console.log(`La base del triangulo es ${b}, su altura es ${h} por lo que su area es ${area}`);
    //alert(`La base del triangulo es ${b}, su altura es ${h} por lo que su area es ${area}`);
}

CalcularArea(b,h);