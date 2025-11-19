
const params = new URLSearchParams(window.location.search);
const categoria = params.get("category");

const titulo = document.querySelector("#tituloCategoria");
const contenedor = document.querySelector("#contenedorProductos");


if (!categoria) {
  titulo.textContent = "Elegí una categoría desde el menú";
  contenedor.innerHTML = "";
} else {
  
  titulo.textContent = categoria.toUpperCase();

  
  fetch(`https://dummyjson.com/products/category/${encodeURIComponent(categoria)}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("DATA CATEGORÍA:", data);
      contenedor.innerHTML = "";

      for (let i = 0; i < data.products.length; i++) {
        const producto = data.products[i];

        contenedor.innerHTML += `
          <article class="productocategoria">
            <img src="${producto.thumbnail}" alt="${producto.title}">
            <div class="infobox">
              <h3>${producto.title}</h3>
              <p>${producto.description}</p>
              <p>$${producto.price}</p>
              <a href="producto.html?id=${producto.id}">Ver detalle</a>
            </div>
          </article>
        `;
      }
    })
    .catch(function (error) {
      console.error("ERROR FETCH CATEGORÍA:", error);
      titulo.textContent = "Hubo un error cargando la categoría 😢";
    });
}


