let form = document.querySelector("#formRegister");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#con");
let inputRepetir = document.querySelector("#rep-contra");
let checkbox = document.querySelector("#termino");
let errores = document.querySelector("#errores");

form.addEventListener("submit", function(event){
    event.preventDefault();

    errores.innerText = "";

    if (inputEmail.value === "") {
        errores.innerText = "El email es obligatorio";
        return;
    }

    if (inputPassword.value === "") {
        errores.innerText = "La contraseña es obligatoria";
        return;
    }
if (inputPassword.value.length < 6) {
        errores.innerText = "La contraseña debe tener al menos 6 caracteres";
        return;
    }

    if (inputPassword.value !== inputRepetir.value) {
        errores.innerText = "Las contraseñas no coinciden";
        return;
    }

    if (!checkbox.checked) {
        errores.innerText = "Debes aceptar los términos y condiciones";
        return;
    }

    location.href = "login.html";
});