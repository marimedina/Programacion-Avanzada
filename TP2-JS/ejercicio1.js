
function Coche(marca, modelo, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.impestoIva = calculoIva(precio)
}

function calculoIva(precio) {
    const iva = (precio * 21) / 100;
    return iva
}

var coche1 = new Coche ("Renault", "Laguna", 1800)
var coche2 = new Coche ("Ford", "Mondeo", 2300)
var coche3 = new Coche ("Mercedes", "600", 8500)
var coche4 = new Coche ("Seat", "Cordoba", 3000)
var cadena;


cadena = `El coche ${coche1.marca} ${coche1.modelo} vale ${coche1.precio} dolares y su IVA es ${coche1.impestoIva}`
document.write(cadena + "<br>")
cadena = `El coche ${coche2.marca} ${coche2.modelo} vale ${coche2.precio} dolares y su IVA es ${coche2.impestoIva}`
document.write(cadena + "<br>")
cadena = `El coche ${coche3.marca} ${coche3.modelo} vale ${coche3.precio} dolares y su IVA es ${coche3.impestoIva}`
document.write(cadena + "<br>")
cadena = `El coche ${coche4.marca} ${coche4.modelo} vale ${coche4.precio} dolares y su IVA es ${coche4.impestoIva}`
document.write(cadena + "<br>")
