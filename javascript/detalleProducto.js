let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get("id");
let contenidoPpal = document.querySelector("main")
fetch(`https://dummyjson.com/products/${id}` )
.then(function(response){
    return response.json()
})
.then(function(info){
console.log(info)
        let reviewsHTML = `
            <h3 class="titulo-reviews">Reseñas</h3>
            <div class="reviews-grid">
        `;

        info.reviews.forEach(function(review){
            reviewsHTML += `
                <div class="card-review">
                    <p class="rating">⭐ ${review.rating}/5</p>
                    <p class="comment">"${review.comment}"</p>
                    <p class="date">${review.date.slice(0,10)}</p>
                    <p class="author">- ${review.reviewerName}</p>
                </div>
            `;
        });

        reviewsHTML += `
            </div>
        `;
        let producto = `
            <section class="contenido">
                <h2><strong>${info.title}</strong></h2>
                <p>${info.description}</p>
                <p><strong>Precio:</strong> $${info.price}</p>

                <img class="product-img" src="${info.images[0]}" alt="${info.title}">

                <p><strong>Stock:</strong> ${info.stock}</p>
                <a class="categoria-link" href="categoria.html?categoria=${info.category}">
                    Ver más de ${info.category}
                </a>

                <ul class="tags-list">
                    <li>#${info.tags[0]}</li>
                    <li>#${info.tags[1]}</li>
                </ul>
            </section>

            <section class="reviews">
                ${reviewsHTML}
            </section>
        `;

        contenidoPpal.innerHTML = producto;
    })
    .catch(function(error){
        console.error(error);
    });
