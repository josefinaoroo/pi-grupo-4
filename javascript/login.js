
let form = document.querySelector("#formLogin");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let errores = document.querySelector("#errores");

form.addEventListener("submit", function(event){

    event.preventDefault();

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

    localStorage.setItem("userEmail", inputEmail.value);

    location.href = "index.html";
});
