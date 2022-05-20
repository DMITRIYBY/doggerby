const productsContainer = document.querySelector('#products-container');

getProducts();

async function getProducts() {
    const response = await fetch('https://github.com/DMITRIYBY/doggerby/blob/main/JS/products.json');

    const productsArray = await response.json();
    console.log(productsArray);
    // sort(productsArray);
    renderProducts(productsArray);
}

// function compareNumbers(a, b) {
//     return a - b;
//   }

// function sort(productsArray){
//     productsArray.price.sort(function(a, b){
//         return a-b;
//     });
//     renderProducts(productsArray);
// }

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        if(window.location.pathname == "/phones.html"){
        if(item.cathegory == "phone"){
        const productHTML = `
    <div class="tovar" data-id="${item.id}">
        <div class="wrapper exmpl">
            <img src="${item.imgSrc}">
        </div>

        <div class="opisanie">
            <h3>${item.company} ${item.model}</h3>
            <br>
            <p>Система: ${item.system}, экран: ${item.screen} , флэш-память: ${item.rom} GB, ОЗУ ${item.ram} GB, камера: ${item.cam} Мп, аккумулятор: ${item.battery} mAh</p>
            <br>
            <br>
        </div>
        <div class="info">
            <p class="price">от ${item.price} руб.</p> 
            <br>
            <p class="bttnSentense">${item.sntenses} предложений.</p>
            <br>
            <p class="count">Кол-во: ${item.count}.</p>
            <br>
            <p class="inCart"><a href="cart.html" style="text-decoration: none; color: black;" class="ash">В корзину</a></p>
        </div>  
    </div>
      `;
      	

      productsContainer.insertAdjacentHTML('beforeend', productHTML);
        }
    }
    if(window.location.pathname == "/notebooks.html"){
        if(item.cathegory == "notebook"){
        const productHTML = `
    <div class="tovar" data-id="${item.id}">
        <div class="wrapper exmpl">
            <img src="${item.imgSrc}" style="width: 112px; height:86px; ">
        </div>

        <div class="opisanie">
            <h3>${item.company} ${item.model}</h3>
            <br>
            <p>Система: ${item.system}, экран: ${item.screen} , флэш-память: ${item.rom} GB, ОЗУ ${item.ram} GB, камера: ${item.cam} Мп, аккумулятор: ${item.battery} mAh</p>
            <br>
            <br>
        </div>
        <div class="info">
            <p class="price">от ${item.price} руб.</p> 
            <br>
            <p class="bttnSentense">${item.sntenses} предложений.</p>
            <br>
            <p class="count">Кол-во: ${item.count}.</p>
            <br>
            <p class="inCart"><a href="cart.html" style="text-decoration: none; color: black;" class="ash">В корзину</a></p>
        </div>  
    </div>
      `;
      	

      productsContainer.insertAdjacentHTML('beforeend', productHTML);
        }
    }
    if(window.location.pathname == "/plays.html"){
        if(item.cathegory == "Pstation"){
        const productHTML = `
        <div class="tovar" data-id="${item.id}">
        <div class="wrapper exmpl">
            <img src="${item.imgSrc}" style="width: 112px; height:86px; justify-content:center;">
        </div>

        <div class="opisanie">
            <h3>${item.company} ${item.model}</h3>
            <br>
            <p>Система: ${item.system}, разрешение игр: ${item.gamescreen} , память: ${item.rom} GB, игра в комплекте: ${item.games}.</p>
            <br>
            <br>
        </div>
        <div class="info">
            <p class="price">от ${item.price} руб.</p> 
            <br>
            <p class="bttnSentense">${item.sntenses} предложений.</p>
            <br>
            <p class="count">Кол-во: ${item.count}.</p>
            <br>
            <p class="inCart"><a href="cart.html" style="text-decoration: none; color: black;" class="ash">В корзину</a></p>
        </div>  
    </div>
      `;
      	

      productsContainer.insertAdjacentHTML('beforeend', productHTML);
        }
    }
    if(window.location.pathname == "/audiosstems.html"){
        if(item.cathegory == "audio"){
        const productHTML = `
        <div class="tovar" data-id="${item.id}">
        <div class="wrapper exmpl">
            <img src="${item.imgSrc}" style="width: 112px; height:86px;">
        </div>

        <div class="opisanie">
            <h3>${item.company} ${item.model}</h3>
            <br>
            <p>Тип: ${item.type}, частоты: ${item.diapazon} Гц, мощность: ${item.rms} Вт, метриалы: ${item.material}, подключение: ${item.connect}.</p>
            <br>
            <br>
        </div>
        <div class="info">
            <p class="price">от ${item.price} руб.</p> 
            <br>
            <p class="bttnSentense">${item.sntenses} предложений.</p>
            <br>
            <p class="count">Кол-во: ${item.count}.</p>
            <br>
            <p class="inCart"><a href="cart.html" style="text-decoration: none; color: black;" class="ash">В корзину</a></p>
        </div>  
    </div>
      `;
      productsContainer.insertAdjacentHTML('beforeend', productHTML);
        }
    }
    });
}
