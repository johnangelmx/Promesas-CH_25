import {productoObj} from './productos.js';

(() => {
    // ? DOM
    let rowCards = document.getElementById("rowCards")
    const getProducto = () => {
        return new Promise((resolve, reject) => {
            if (productoObj == null) {
                reject(new Error("Producto No existe"))
            }

            setTimeout(() => {
                resolve(productoObj)
            }, 500);
        })
    }
    getProducto().then(r => {
        r.forEach(e => {
            let card = `
            <div class="col">
            <div class="card h-70">
                <img src="${e.image}" class="card-img-top h-50 w-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${e.title}</h5>
                    <p class="card-text overflow-auto">${e.description}</p>
                </div>
                <div class="card-footer d-grid gap-2 d-md-flex justify-content-md-end">
                    <h6 class="text-muted">Price: $${e.price}</h6>
                    <button type="button" class="btn btn-primary"
        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"> More info </button>
                </div>
            </div>
        </div>
     `;
            rowCards.insertAdjacentHTML("beforeend", card)
        })
    }).catch(r => console.log(r));
})();