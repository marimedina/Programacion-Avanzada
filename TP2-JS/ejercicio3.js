

const inputName = document.getElementById("inputName");
const inputLastname = document.getElementById("inputLastname");
const inputAddres = document.getElementById("inputAddres");
const inputTelephone = document.getElementById("inputTelephone");
const inputEmail = document.getElementById("inputEmail");
const buttonSubmit = document.getElementById("buttonSubmit");
const buttonCancel = document.getElementById("buttonCancel");
const formulario = document.getElementById("Formulario");



function validForm() {
    if (inputName.value.length <> 0 && inputLastname.value.length <> 0 && inputAddres.value.length <> 0
        && inputTelephone.value.length <> 0 && inputEmail.value.length <> 0) {
            swal("Datos envidados correctamente" {
                icon: "success",
                buttons: false
            });
    }
    else {
        swal("Todos los campos deben ser completados"{
            icon: "warning",
            buttons: "ok"
        });
    }
}

validForm(formulario);




