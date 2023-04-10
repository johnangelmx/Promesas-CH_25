(() => {
  let rowCards = document.getElementById("rowCards")

  function getProductoJSON() {
    let promesa = fetch('https://fakestoreapi.com/products/', { method: 'GET' });
    promesa.then(response => {
      response.json().then(prods => {
        console.log(prods);
        prods.forEach(e => {
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
                   </div>
                   <div class="card-footer">
                          <p class="card-text d-inline"><small class="text-muted">Price: $${e.price}</small></p>
                     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal_${e.id}"
                              style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x:
                              .5rem; --bs-btn-font-size: .75rem;"> More info </button>
                    </div>
                 </div>
               </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="exampleModal_${e.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">${e.title}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                ${e.description}
                <hr>
                <img src="${e.image}" class="h-50 w-50" alt="...">
                <small class="text-muted">Price: $${e.price}</small></p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                </div>
              </div>
            </div>
          </div>
            `;
          rowCards.insertAdjacentHTML("beforeend", card)
        });
      }).catch(err => {
        console.log(`Error en el formato de la respuesta ${err.message}`);
      })
    }).catch(error => console.log)
  }

  getProductoJSON();

  // ? DOM
  // let rowCards = document.getElementById("rowCards")
  // const getProducto = () => {
  //   return new Promise((resolve, reject) => {
  //     if (productoObj == null) {
  //       reject(new Error("Producto No existe"))
  //     }

  //     setTimeout(() => {
  //       resolve(productoObj)
  //     }, 3000);
  //   })
  // }
  // getProducto().then(r => {
  //   r.forEach(e => {
  //     let card = `
  //           <div class="card mb-2 p-2" style="max-width: 540px;">
  //                <div class="row no-gutters">
  //                  <div class="col-4 col-md-4 col-lg-4">
  //                    <img src="${e.image}" class="card-img h-100 w-100" alt="...">
  //                  </div>
  //                  <div class="col-8 col-md-8 col-lg-8">
  //                    <div class="card-body">
  //                      <h5 class="card-title">${e.title}</h5>
  //                      <p class="card-text text-truncate overflow-y-auto">${e.description}</p>
  //                      <p class="card-text"><small>${e.category}</small></p>
  //                    </div>
  //                    <div class="card-footer">
  //                           <p class="card-text d-inline"><small class="text-muted">Price: $${e.price}</small></p>
  //                      <button type="button" class="btn btn-primary"
  //                               style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x:
  //                               .5rem; --bs-btn-font-size: .75rem;"> More info </button>
  //                     </div>
  //                  </div>
  //                </div>
  //           </div>
  //  `;
  //     rowCards.insertAdjacentHTML("beforeend", card)
  //   })
  // }).catch(r => console.log(r));
})();