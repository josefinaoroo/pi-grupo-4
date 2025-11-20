let queryString = location.search;             
let queryObj = new URLSearchParams(queryString);
let termino = queryObj.get("q");

let titulo = document.querySelector("#tituloResultados");
let listaResultados = document.querySelector("#listaResultados");
let mensajeSinResultados = document.querySelector("#sinResultados");

titulo.innerText = `Resultados para: ${termino}`;

fetch(`https://dummyjson.com/products/search?q=${termino}`)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(info){
        console.log(info);

        if(info.products.length == 0){
            mensajeSinResultados.innerText = 
                `No se encontraron resultados para "${termino}"`;
            return;
        }

        let contenido = "";

        info.products.forEach(function(producto){
            contenido += `
                <article class="resultados-item">
                    <a href="detalleProducto.html?id=${producto.id}">
                        <img src="${producto.thumbnail}" alt="${producto.title}">
                    </a>
                    <div class="info">
                        <h3>${producto.title}</h3>
                        <p>$${producto.price}</p>
                        <a class="btn-ver" href="detalleProducto.html?id=${producto.id}">
                            Ver más
                        </a>
                    </div>
                </article>
            `;
        });

        listaResultados.innerHTML = contenido;
    })
    .catch(function(error){
        console.log(error);
        mensajeSinResultados.innerText = 
            "Hubo un error al cargar los resultados.";
    });