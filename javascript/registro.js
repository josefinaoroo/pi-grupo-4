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

})