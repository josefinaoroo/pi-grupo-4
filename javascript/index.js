let section1 = document.querySelector(".section1")
let productosSection1 = "";
let section2 = document.querySelector(".section2")
let productosSection2 = "";
fetch('https://dummyjson.com/products/category/kitchen-accessories')
.then(function(response){
    return response.json()
})
.then(function(info){
  productosSection1 +=   `<h2>🖤 NUESTROS FAVORITOS DEL DÍA 🖤</h2>` 
  for (let i = 0; i < info.products.length; i++) {
    productosSection1 += 
     `<article class="productos">
        <img src=${info.products[i].images[0]} alt="${info.products[i].title}">
          <div class="info">
             <h3>${info.products[i].title}</h3>
             <p>${info.products[i] .description}</p>
             <P>${info.products[i] .price}</P>
             <a href="producto.html?id=${info.products[i].id}">Ver detalle</a>
          </div>  
       </article>
     `    
    }
    section1.innerHTML = productosSection1;
}) .catch(function(error){
    console.error(error)
})

fetch('https://dummyjson.com/products/category/sports-accessories')
.then(function(response){
    return response.json()
})
.then(function(info){
      productosSection2 +=   `<h2>PRODUCTOS MÁS VENDIDOS</h2>`
    for (let i = 0; i < info.products.length; i++) {
       productosSection2 +=
     `<article class="productos">
        <img src=${info.products[i].images[0]} alt="${info.products[i].title}">
          <div class="info">
             <h3>${info.products[i].title}</h3>
             <p>${info.products[i] .description}</p>
             <P>${info.products[i] .price}</P>
             <a href="producto.html?id=${info.products[i].id}">Ver detalle</a>
          </div>  
       </article>
     `    
    }
    section2.innerHTML = productosSection2;
})