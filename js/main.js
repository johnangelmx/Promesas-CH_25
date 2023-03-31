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
            <div class="card mb-2 p-2" style="max-width: 540px;">
                 <div class="row no-gutters">
                   <div class="col-4 col-md-4 col-lg-4">
                     <img src="${e.image}" class="card-img h-100 w-100" alt="...">
                   </div>
                   <div class="col-8 col-md-8 col-lg-8">
                     <div class="card-body">
                       <h5 class="card-title">${e.title}</h5>
                       <p class="card-text text-truncate overflow-y-auto">${e.description}</p>
                       <p class="card-text"><small>${e.category}</small></p>
                       <p class="card-text d-inline"><small class="text-muted">Price: $${e.price}</small></p>
                       <button type="button" class="btn btn-primary"
                                style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: 
                                .5rem; --bs-btn-font-size: .75rem;"> More info </button>
                     </div>
                   </div>
                 </div>
            </div>
   `;
            rowCards.insertAdjacentHTML("beforeend", card)
        })
    }).catch(r => console.log(r));
})();