alert('Vinculado');

/*--------------------- original code -------------------------*/
/*------------------------- Login -----------------------------*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
/*-------------------------------------------------------------*/

/*--------------------- 1° Pre Entrega-------------------------*/

const btnShend = document.querySelector ('#btnShend'); //Mandar producto al carrito
const shippedProducts = document.querySelector ('#shippedProducts');
const btnCalculateCost = document.querySelector ('#btnCalculateCost'); //Calcular costo
const totalCost = document.querySelector ('#totalCost');

btnShend.addEventListener ('click', addElement);
btnCalculateCost.addEventListener ('click', calculateTotalCost);

class ProductoShopping {
    constructor (nombre, cantidad, precio) {
        this.nombre = nombre.toUpperCase(); 
        this.cantidad = cantidad;
        this. precio = precio;
    }
    productCost  = () => this.cantidad * this.precio;
};

function addElement () {
    let addNumber = parseInt (prompt("Coloque la cantidad de productos a comprar = D"));
    let productoAlCarro = [];
    for (let i = 0; i < addNumber; i++) {
        let nombre = prompt ("Ingrese el nombre del producto");
        let cantidad = parseInt(prompt ("Ingrese la cantidad del producto que quiere adquirir"));
        let precio = parseFloat(prompt ("Ingrese el precio del producto, no haga descuento ; )"));
        let productoEnCarro = new ProductoShopping (
            nombre,
            cantidad,
            precio
        );
        productoAlCarro.push(productoEnCarro);
    }
    for (const productName of productoAlCarro) {
        shippedProducts.innerHTML += 'Producto ' + productName.nombre + "<br/>";
    }
    return productoAlCarro;
};


function calculateTotalCost (productoAlCarro) {
    let total = 0;
    for (let x of productoAlCarro) {
        total = total + x.productCost ();
    }
    totalCost.innerHTML += 'El costo total de los productos en el carrito es de: $ ' + total + '.' + "<br/>";
    return total;
};

/*--------------------- Desafios-------------------------*/

// Desafio Clase 6 y 7

/*---------------------Agregar producto-------------------------*/

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

    for (let i = 0; i < product.length; i++) {
        console.log ("Producto: "+ i + " --> "+ product[i]);
        dStock.innerHTML += "Producto: "+ i + " --> "+ product[i] + "<br/>";
    }
}


