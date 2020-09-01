

var inputName = document.getElementById("inputName");
var inputLastname = document.getElementById("inputLastname");
var inputAddres = document.getElementById("inputAddres");
var inputTelephone = document.getElementById("inputTelephone");
var inputEmail = document.getElementById("inputEmail");
var buttonSubmit = document.getElementById("buttonSubmit");
var buttonCancel = document.getElementById("buttonCancel");
var formulario = document.getElementById("Formulario");

buttonSubmit.addEventListener("click", validForm)
buttonCancel.addEventListener("click", Cancelar)


function Cancelar() {
    swal({
        title: `¿Cancelar la carga?`,
        icon: "warning",
        buttons: {
            cancel: {
                text: 'No',
                value: null
            },
            confirm: {
                text: 'Si',
                value: true
            }
        }
    });
}


function validForm() {
    if (inputName.value.trim().length != 0 && inputLastname.value.trim().length != 0 && inputAddres.value.trim().length != 0 
        && inputTelephone.value.trim().length != 0 && inputEmail.value.trim().length != 0) {
            swal("Datos envidados correctamente", {
                icon: "success",
                buttons: 'ok'
            })
    }
    else {
        swal("Todos los campos deben estar completos", {
            icon: "warning",
            buttons: "ok"
        });
    }
}




