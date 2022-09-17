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

    if (!isAsideClosed) { //Comparacion con aside
        aside.classList.add ('inactive');
    }
    
    desktopMenu.classList.toggle ('inactive'); //Actividad individual Desktop Menu
}

function toggleMobileMenu () { 
    
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) { //Comparacion con aside
        aside.classList.add ('inactive');
    }

    mobileMenu.classList.toggle ('inactive'); //Actividad individual Mobile Menu
}

function toggleCarritoAside () { 
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesltopMenuClosed = desktopMenu.classList.contains('inactive');


    if (!isMobileMenuClosed) { //Comparacion con el Mobile Menu
        mobileMenu.classList.add ('inactive');
    }

    if (!isDesltopMenuClosed) { //Comparacion con el Desktop Menu
        desktopMenu.classList.add ('inactive');
    }

    aside.classList.toggle ('inactive'); //Actividad individual aside
}

/*-------------------------------------------------------------*/

/*--------------------- Desafios, entregas------------------------*/

const btnShend = document.querySelector ('#btnShend'); //Mandar producto al carrito
const shippedProducts = document.querySelector ('#shippedProducts');
const btnCalculateCost = document.querySelector ('#btnCalculateCost'); //Calcular costo
const totalCost = document.querySelector ('#totalCost');
let productoAlCarro = [];


btnShend.addEventListener ('click', addElement);
btnCalculateCost.addEventListener ('click', calculateTotalCost);

class ProductoShopping {
    constructor (nombre, cantidad, precio) {
        this.nombre = nombre.toUpperCase(); 
        this.cantidad = cantidad;
        this. precio = precio;
    }
    productCost  = () => this.cantidad * this.precio;
}

function addElement () {
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
        let varId = 0;
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
}

function calculateTotalCost () {
    let total = 0;
    for (let x of productoAlCarro) {
        total = total + x.productCost ();
    }
    totalCost.innerHTML += 'El costo total de los productos en el carrito es de: $ ' + total + '.' + "<br/>";
    return total;
}

/*---------------------Agregar producto a Stock-------------------------*/

const addProd = document.querySelector ('#btnAddProduct');

addProd.addEventListener ('click', addProduct);

function addProduct () {
    let name = prompt ('Ingrese el nombre del nuevo producto');
    product.push(name);
    alert ('Se agrego: ' + name);
};

/*---------------------Stock-------------------------*/

const productBtn = document.querySelector ('#btnProduct');
const dStock = document.querySelector ('#stock');

let product = ['Blue Protocol', 'Star Citizen', 'Diablo 4', 'Lost Soul Aside', 'Hollow Knght: Silksong', 'Dead Island 2', 'Stalker 2'];

productBtn.addEventListener ('click', mostrarProductos);

function mostrarProductos () {
    dStock.innerHTML = ' ';
    for (let i = 0; i < product.length; i++) {
        console.log ("Producto: "+ i + " --> "+ product[i]);
        dStock.innerHTML += "Producto: "+ i + " --> "+ product[i] + "<br/>";
    }
}


