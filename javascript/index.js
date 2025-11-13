let section1 = document.querySelector(".section1")
console.log(section1)
let productosSection1 = "";
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
             <p>${info.products[i] .description}</p>
             <P>${info.products[i] .price}</P>
             <a href="productos.html">Ver detalle</a>
          </div>  
       </article>
     `    
    }
    console.log(productosSection1)
    section1.innerHTML = productosSection1;
}) .catch(function(error){
    console.error(error)
})

let section2 = document.querySelector(" .section2")
console.log(section2)
let productosSection2 = ""

.then(function(info){
    console.log(info);
    for (let i = 0; i < info.products.length; i++){
    console.log(info.products[i] .title)
    productosSection2 +=
        `<article class="productos">
          <img src="./img/badbunny/remera_bb.webp" alt="">
           <div class="info">
             <h3>Remera Bad Bunny</h3>
             <p>Remera de Bad Bunny del album DTMF</p>
             <P>Precio: $55.000</P>
             <a href="productos.html">Ver detalle</a>
           </div> 
         </article>
            `
    }
)}


