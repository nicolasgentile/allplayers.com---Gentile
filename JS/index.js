alert('Vinculado');

/*--------------------- original code -------------------------*/

/*------------------------- Login -----------------------------*/

const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');

/*------------------------- Mobile menu -----------------------------*/

const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');

/*------------------------- Carrito Aside -----------------------------*/

const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const aside = document.querySelector ('.product-detail');

menuEmail.addEventListener ('click', toggleDesktopMenu);

menuHamIcon.addEventListener ('click', toggleMobileMenu);

menuCarritoIcon.addEventListener ('click', toggleCarritoAside);

function toggleDesktopMenu () { //Si abrimos el menu se cierra el carrito
    
    const isAsideClosed = aside.classList.contains('inactive');

    !isAsideClosed && aside.classList.add ('inactive');

    /* if (!isAsideClosed) { //Comparacion con aside
        aside.classList.add ('inactive');
    } */
    
    desktopMenu.classList.toggle ('inactive'); //Actividad individual Desktop Menu
}

function toggleMobileMenu () { 
    
    const isAsideClosed = aside.classList.contains('inactive');

    !isAsideClosed && aside.classList.add ('inactive'); //Reduccion de un condicional

    /* if (!isAsideClosed) { //Comparacion con aside
        aside.classList.add ('inactive');
    } */

    mobileMenu.classList.toggle ('inactive'); //Actividad individual Mobile Menu
}

function toggleCarritoAside () { 
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    !isMobileMenuClosed && mobileMenu.classList.add ('inactive'); //Reduccion de un condicional

    /* if (!isMobileMenuClosed) { //Comparacion con el Mobile Menu
        mobileMenu.classList.add ('inactive');
    } */

    !isDesktopMenuClosed && desktopMenu.classList.add ('inactive'); //Reduccion de un condicional

    /* if (!isDesktopMenuClosed) { //Comparacion con el Desktop Menu
        desktopMenu.classList.add ('inactive');
    }
 */
    aside.classList.toggle ('inactive'); //Actividad individual aside
}

/*------------------------- Product list -----------------------------*/

const cardsContainer = document.querySelector ('.cards-container');

const productList = [];

productList.push ({
    id: 1,
    name: 'Resident Evil 3',
    price: 2106,
    image: 'https://cdn-products.eneba.com/resized-products/g7QZ7MReBTAiWCuyToeFHm6IkUK0j3CAnGJVBqIjccw_350x200_1x-0.jpeg'
});
productList.push ({
    id: 2,
    name: 'Ciberpunk 2077',
    price: 3981,
    image: 'https://cdn-products.eneba.com/resized-products/e4F2hNGTi5VjMHS29as0dZaQpCPfP6jbQzhPu_GAQ_U_350x200_1x-0.jpeg'
});
productList.push ({
    id: 3,
    name: 'Monster Hunter: World',
    price: 2146,
    image: 'https://cdn-products.eneba.com/resized-products/a4fbbfd448440942d3a787dc88a0c1cd_350x200_1x-0.jpg'
});
productList.push ({
    id: 4,
    name: 'Devil May Cry 5',
    price: 1591,
    image: 'https://cdn-products.eneba.com/resized-products/Jn6PP_XEj4puvACs9w8WecI8XbGg7CpHJAvlzofpsrk_350x200_1x-0.jpeg'
});
productList.push ({
    id: 5,
    name: 'Red Dead Redemtion 2',
    price: 4987,
    image: 'https://cdn-products.eneba.com/resized-products/6M1qP76B-j6vdX0T4bFCHgJeX99MaKBpXFxbpif1MqY_350x200_1x-0.jpeg'
});
productList.push ({
    id: 6,
    name: 'Shadow of the Tomb Raider',
    price: 2606,
    image: 'https://cdn-products.eneba.com/resized-products/2b2a4aa095bd0eade2854c4b929642a9_350x200_1x-0.jpg'
});
productList.push ({
    id: 7,
    name: 'Battlefield V',
    price: 2240,
    image: 'https://cdn-products.eneba.com/resized-products/78f848d8773a629a3123e790884b0ed4_350x200_1x-0.jpg'
});
productList.push ({
    id: 8,
    name: 'Grand Theft Auto V',
    price: 1850,
    image: 'https://cdn-products.eneba.com/resized-products/s29Db6ZBVLneuD0t66qnYRamvGDP3p8chLz-3IomxcU_350x200_1x-0.jpeg'
});
productList.push ({
    id: 9,
    name: 'The Witcher 3: Wild Hunt',
    price: 2308,
    image: 'https://cdn-products.eneba.com/resized-products/0c87248bbfac2866d434aad19334b24b_350x200_1x-0.jpg'
});
productList.push ({
    id: 10,
    name: 'Minecraft: Java Edition',
    price: 4193,
    image: 'https://cdn-products.eneba.com/resized-products/Xl1yxdDvS66HrBBK3wVM03JuBzJrcXmJyz91if0l2NA_350x200_1x-0.jpeg'
});
productList.push ({
    id: 11,
    name: 'Temtem',
    price: 14248,
    image: 'https://cdn-products.eneba.com/resized-products/TrFkCZK_DA74UI8oCE_RhNud-vZ8st2phptDX1v_Mxw_350x200_1x-0.jpeg'
});
productList.push ({
    id: 12,
    name: 'DOOM',
    price: 800,
    image: 'https://cdn-products.eneba.com/resized-products/exjg5qwydaz7mzyrfvxn_350x200_1x-0.jpg'
});
productList.push ({
    id: 13,
    name: 'Rocket League',
    price: 104990,
    image: 'https://cdn-products.eneba.com/resized-products/edkpgyqgfsxyiby9pyj5_350x200_1x-0.jpg'
});
productList.push ({
    id: 14,
    name: 'Crysis 3',
    price: 2875,
    image: 'https://cdn-products.eneba.com/resized-products/eiwqS8P_350x200_1x-0.jpg'
});
productList.push ({
    id: 15,
    name: 'Max Payne 3',
    price: 3186,
    image: 'https://cdn-products.eneba.com/resized-products/067e0818bd36d71e109c0eb18b67c887_350x200_1x-0.jpg'
});
productList.push ({
    id: 16,
    name: 'Borderlands 3',
    price: 2606,
    image: 'https://cdn-products.eneba.com/resized-products/EPLPatyhOck36hY82-MGKXpRc1X_IC-oWVRlzqCExWU_350x200_1x-0.jpeg'
});
productList.push ({
    id: 17,
    name: 'The Elder Scrolls V: Skyrim',
    price: 2308,
    image: 'https://cdn-products.eneba.com/resized-products/yakiwtuy29tu0atooopm_350x200_1x-0.jpg'
});
productList.push ({
    id: 18,
    name: 'Dark Soul III',
    price: 7298,
    image: 'https://cdn-products.eneba.com/resized-products/BjdEY6u_350x200_1x-0.jpg'
});
productList.push ({
    id: 19,
    name: 'A Way Out',
    price: 2600,
    image: 'https://cdn-products.eneba.com/resized-products/znal9oqmtkqzedjd3x2p_350x200_1x-0.jpg'
});
productList.push ({
    id: 20,
    name: 'Mount & Blade II: Bannerlord',
    price: 6884,
    image: 'https://cdn-products.eneba.com/resized-products/AAZeDL4z_CSRpykH8w-zsfPIc8AIPQwe9iw_CE4OxHM_350x200_1x-0.jpeg'
});
productList.push ({
    id: 21,
    name: 'Far cry 3',
    price: 1680,
    image: 'https://cdn-products.eneba.com/resized-products/clqp8A2_350x200_1x-0.jpg'
});
productList.push ({
    id: 22,
    name: 'Batman: Arkha City',
    price: 500,
    image: 'https://cdn-products.eneba.com/resized-products/nemib0kgnbo6i0rmlavm_350x200_1x-0.jpg'
});
/* productList.push ({
    name: '',
    price: ,
    image: ''
}); */


//Pintar los productos en el HTML

productList.forEach((product) => {
    const productCard = document.createElement ('div');
    productCard.classList.add ('product-card');

    const productImg = document.createElement ('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement ('div');
    productInfo.classList.add ('product-info');

    const productInfoDiv = document.createElement ('div');
    
    const productPrice = document.createElement ('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement ('p');
    productName.innerText = product.name;
    
    productInfoDiv.appendChild (productPrice);
    productInfoDiv.appendChild (productName);

    const productInfoFigure = document.createElement ('figure');
    productInfoFigure.classList.add ('button');
    productInfoFigure.innerHTML = `
    <button type="button" class="btn btn-warning" id="btnAdd-${product.id}">Add <i class="fas fa-shopping-cart"></i></button>`

    productInfo.appendChild (productInfoDiv);
    productInfo.appendChild (productInfoFigure);

    productCard.appendChild (productImg);
    productCard.appendChild (productInfo);
    
    cardsContainer.appendChild (productCard)

    const btnAddProduct = document.getElementById (`btnAdd-${product.id}`);
    btnAddProduct.addEventListener ('click', () => {
        addToCard(product.id)
    })
})

let card = [];

const addToCard = (productId) => {
    const item = productList.find ((prod) => prod.id === productId);
    card.push(item);
    updateCart();
}

const myOrderContent = document.querySelector ('.my-order-content');
const cardCounter = document.getElementById ('cardCounter');
const totalPrice = document.getElementById ('totalPrice');

const updateCart = () => {

    myOrderContent.innerHTML = ' '

    card.forEach ((prod) => {

        const shoppingCart = document.createElement ('div');
        shoppingCart.classList.add ('shopping-cart');

        const shoppingFigure = document.createElement ('figure');

        const shoppingFigureImage = document.createElement ('img');
        shoppingFigureImage.setAttribute ('src', prod.image);

        shoppingFigure.appendChild (shoppingFigureImage);

        const shoppingPName = document.createElement ('p');
        shoppingPName.innerText = prod.name;

        const shoppingPPrice = document.createElement ('p');
        shoppingPPrice.innerText = prod.price;

        const shoppingImageIcon = document.createElement ('figure');
        shoppingImageIcon.classList.add ('button');
        shoppingImageIcon.innerHTML = `
        <button onclick="btnDelete(${prod.id})" class="btn btn-warning"><i class="fas fa-trash-alt></i></button>`

        shoppingCart.appendChild (shoppingFigure);
        shoppingCart.appendChild (shoppingPName);
        shoppingCart.appendChild (shoppingPPrice);
        shoppingCart.appendChild (shoppingImageIcon);

        myOrderContent.appendChild (shoppingCart);

        localStorage.setItem ('card', JSON.stringify(card));
    })

    cardCounter.innerText = card.length;
    totalPrice.innerText = card.reduce((acc, prod) => acc + prod.price, 0);
}

const btnDelete = (prodId) => {
    const item = card.find((prod) => prod.id === prodId)
    const indice = card.indexOf(item);
    card.splice(indice, 1);
    if (card.length === 0) localStorage.clear();
    updateCart ();
}

const btnEmptyCard = document.getElementById ('emptyCard');

btnEmptyCard.addEventListener ('click', () => {
    card.length = 0;
    localStorage.clear ();
    updateCart ();
})

document.addEventListener ('DOMContentLoaded', () => {
    if (localStorage.getItem ('card')) {
        card = JSON.parse(localStorage.getItem ('card'));
        updateCart ();
    }
});

/* <div class="shopping-cart">
                <figure>
                    <img src="https://images.pexels.com/photos/12858127/pexels-photo-12858127.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="img">
                </figure>
                <p>Hojita</p>
                <p>$ 30,00</p>
                <img src="./icons/icon_close.png" alt="close">
            </div> */



/*-------------------------------------------------------------*/

/*--------------------- Desafios, entregas------------------------*/


/*---------------------Formulario, pintar producto-------------------------*/

/* let productToCart = [];
let form;
let inputId;
let inputName;
let inputAmount;
let inputPrice;
let productsContainer;

class Producto {
    constructor (id, nombre, cantidad, precio) { 
        this.id = id; 
        this.nombre = nombre.toUpperCase(); 
        this.cantidad = cantidad;
        this. precio = precio;
    }
    productCost  = () => this.cantidad * this.precio;
}

function initializeElements () {
    form = document.getElementById ('form');
    inputId = document.getElementById ('inputId');
    inputName = document.getElementById ('inputName');
    inputAmount = document.getElementById ('inputAmount');
    inputPrice = document.getElementById ('inputPrice');
    productsContainer = document.getElementById ('productsContainer');
}

function initializeEvents () {
    form.onsubmit = (event) => validateForm (event);
}

function validateForm (event) {
    event.preventDefault();
    let productId = inputId.value;
    let productName = inputName.value;
    let productAmount = parseInt (inputAmount.value);
    let productPrice = parseFloat (inputPrice.value);
    let productInCart = new Producto (
        productId,
        productName,
        productAmount,
        productPrice
    );
    
    productToCart.push (productInCart);

    form.reset ();

    paintProducts ();
}

function paintProducts () {
    productsContainer.innerHTML= " ";
    productToCart.forEach ((objectProduct) =>{
        let space = document.createElement ("div");
        space.className = "col-md-4 mt-10"
        space.id = `space-${objectProduct.id}`
        space.innerHTML = 
        `<div class="card exampleCard">
            <div class="card-body exampleCardBody>
                <p class="card-text pCard"> ID: <b>${objectProduct.id}</b></p>
                <p class="card-text pCard"> Nombre: <b>${objectProduct.nombre}</b></p>
                <p class="card-text pCard"> Cantidad: ${objectProduct.cantidad}</p>
                <p class="card-text pCard"> Precio: <b>${objectProduct.precio * objectProduct.cantidad}</b></p>
            </div>
            <div class="card-footer">
                <button class="btn btn-danger" id="btnDelete-${objectProduct.id}">Delete</button>
            </div>
        </div>`;

        productsContainer.append (space);

        let btnDelete = document.getElementById (`btnDelete-${objectProduct.id}`);
        
        btnDelete.onclick = () => deleteProduct (objectProduct.id); 
    });
}

function deleteProduct (idProduct) {
    let deleteSpace = document.getElementById (`space-${idProduct.id}`);
    deleteSpace.remove();
}

function main () {
    initializeElements();
    initializeEvents ();
}

main(); */

/*---------------------Calcular costo del carro-------------------------*/

/* btnCalculateCost = document.querySelector ('#btnCalculateCost'); //Calcular costo
totalCost = document.querySelector ('#totalCost');

btnCalculateCost.addEventListener ('click', calculateTotalCost);

function calculateTotalCost () {
    let total = 0;
    for (let x of productToCart) {
        total = total + x.productCost ();
    }
    totalCost.innerHTML += 'El costo total de los productos en el carrito es de: $ ' + total + '.' + "<br/>";
    return total;
} */

/*---------------------Agregar producto a Stock-------------------------*/

/* const addProd = document.querySelector ('#btnAddProduct');

addProd.addEventListener ('click', addProduct);

function addProduct () {
    let name = prompt ('Ingrese el nombre del nuevo producto');
    product.push(name);
    alert ('Se agrego: ' + name);
};
 */
/*---------------------Stock-------------------------*/

/* const productBtn = document.querySelector ('#btnProduct');
const dStock = document.querySelector ('#stock');

let product = ['Blue Protocol', 'Star Citizen', 'Diablo 4', 'Lost Soul Aside', 'Hollow Knght: Silksong', 'Dead Island 2', 'Stalker 2'];

productBtn.addEventListener ('click', mostrarProductos);

function mostrarProductos () {
    dStock.innerHTML = ' ';
    for (let i = 0; i < product.length; i++) {
        console.log ("Producto: "+ i + " --> "+ product[i]);
        dStock.innerHTML += "Producto: "+ i + " --> "+ product[i] + "<br/>";
    }
} */


/*---------------------Codigo viejo-------------------------*/

/* btnShend = document.querySelector ('#btnShend'); //Mandar producto al carrito desde promps
shippedProducts = document.querySelector ('#shippedProducts'); */

/* btnShend.addEventListener ('click', addElement); */

/* function addElement () {
    let addNumber = parseInt (prompt("Coloque la cantidad de productos a comprar = D"));
    for (let i = 0; i < addNumber; i++) {
        let nombre = prompt ("Ingrese el nombre del producto");
        let cantidad = parseInt (prompt ("Ingrese la cantidad del producto que quiere adquirir"));
        let precio = parseFloat (prompt ("Ingrese el precio del producto, no haga descuento ; )"));
        let productoEnCarro = new ProductoShopping (
            nombre,
            cantidad,
            precio
        );
        productoAlCarro.push (productoEnCarro);
    }
    for (const productCar of productoAlCarro) {
        let space = document.createElement("div");
        space.className = "col-md-4 mt-10";
        space.id = `space-${space + 1}`;
        space.innerHTML = 
        `<div class="card-columns">
            <div class="card bg-warning> 
                <p class="card-text"> Nombre: <b>${productCar.nombre}</b></p>
                <p class="card-text"> Cantidad: ${productCar.cantidad}</p>
                <p class="card-text"> Precio: <b>${productCar.precio * productCar.cantidad}</b></p>
            </div>
        </div>`;

        shippedProducts.append(space);
    }
    return productoAlCarro;
} */



