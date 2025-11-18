let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
let contenidoPpal = document.querySelector("main")
fetch('https://dummyjson.com/products/${id}')
.then(function(response){
    return response.json()
})
.then(function(info){
console.log(info)
let producto = `
        <section class="contenido">
            <h2><strong>${info.title}</strong></h2>
            <p>${info.description}</p>
            <p>Precio $${info.price}</p>
            <img src= ${info.images[0]} alt="${info.title}">
            <p>Stock: ${info.stock}</p>
            <a href=categoria.html?categoria=${info.category}>${info.category}</a>
            <ul>
                <li>#${info.tags[0]}</li>
                <li>#${info.tags[1]}</li>
            </ul>
        </section>
        <section class="reviews">
           <div> 
            <p>Rating: ${info.reviews[0].rating}</p>
            <p>${info.reviews[0].comment}</p>
            <p>${info.reviews[0].date}</p>
            <p>${info.reviews[0].reviewerName}</p>
           </div>
            <div> 
            <p>Rating: ${info.reviews[1].rating}</p>
            <p>${info.reviews[1].comment}</p>
            <p>${info.reviews[1].date}</p>
            <p>${info.reviews[1].reviewerName}</p>
           </div>
           <div> 
            <p>Rating: ${info.reviews[2].rating}</p>
            <p>${info.reviews[2].comment}</p>
            <p>${info.reviews[2].date}</p>
            <p>${info.reviews[2].reviewerName}</p>
           </div>
        </section>
`
contenidoPpal.innerHTML = producto
})
.catch(function(error){
    console.error(error)
})