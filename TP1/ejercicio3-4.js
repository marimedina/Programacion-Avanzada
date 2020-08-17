
//Verificacion de edad jubilatoria

const edad = 67
let sexo = "f"

if (edad > 0) {
    if (sexo == "f") {
        if(edad >= 60) {
            console.log("Esta mujer esta en condiciones de jubilarse");
        }
        else {
            console.log("Esta mujer no cumple con la edad minima para jubilarse");
        }
    } else {
        if(sexo == "m"){
            if(edad >= 65){
                console.log("Este hombre esta en condiciones de jubilarse");
            }
            else {
                console.log("Este hombre no cumple con la edad minima para jubilarse");
            }
        }
        else {
            console.log("Sexo ingresado incorrecto");
        }
    }
}
else {
    console.log("Edad incorrecta, ingrese un numero positivo");
}