
let usuario = localStorage.getItem("userEmail");
let contenedorLogRes = document.querySelector(".logres");
let header = document.querySelector("header");

if (usuario) {
    let saludo = document.createElement("p");
    saludo.classList.add("saludoUsuario");
    saludo.innerText = `Bienvenido: ${usuario}`;

    
    let logout = document.createElement("a");
    logout.innerText = "Logout";
    logout.href = "#";
    logout.style.marginLeft = "20px";

    logout.addEventListener("click", function (event) {
        event.preventDefault(); 
        localStorage.removeItem("userEmail");

        saludo.innerText = "";
        logout.innerText = "";

        if (contenedorLogRes) {
            contenedorLogRes.innerHTML = `
                <a href="registro.html">REGISTRO</a>
                <a href="login.html">LOGIN</a>
            `;
        }

        location.href = "login.html";
    });

    header.append(saludo, logout);

    if (contenedorLogRes) {
        contenedorLogRes.innerHTML = "";
    }
}