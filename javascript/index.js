let section1 = document.querySelector(".section1")
console.log(section1)
let productosSeccion1 = "";
fetch('https://dummyjson.com/products')
.then(function(response){
    return response.json()
})
.then(function(info){
    console.log(info);
   for (let i = 0; i < info.products.length; i++) {
    console.log(info.products [i].title)
    productosSeccion1 += 
     `<article class="productos">
        <img src="./img/badbunny/totebag_bb.webp" alt="">
          <div class="info">
             <h3>${info.products[i].title}</h3>
             <p>Totebag de Bad Bunny de su última gira</p>
             <P>Precio: $36.000</P>
             <a href="productos.html">Ver detalle</a>
          </div>  
       </article>
     `    
    }
    console.log(productosSeccion1)
    section1.innerHTML = productosSeccion1;
}) .catch(function(error){
    console.error(error)
})




