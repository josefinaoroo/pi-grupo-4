
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

    
    logout.addEventListener("click", function () {
        localStorage.removeItem("userEmail");
        location.href = "index.html"; 
    });

   
    header.append(saludo, logout);

  
    if (contenedorLogRes) {
        contenedorLogRes.innerHTML = ""; 
    }
}
