/*------------------------- Login -----------------------------*/

const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');

/*------------------------- Carrito Aside -----------------------------*/

const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const aside = document.querySelector ('.product-detail');

/*------------------------- Variables de usuario y menu -----------------------------*/

let user  // Usuario logeado 
let identificationContainer = document.getElementById ('identificationContainer');
let identificationForm = document.getElementById ('identificationForm');
let userContainer = document.getElementById ('userContainer');
let userEmail = document.getElementById ('userEmail');
let inputUsuario =document.getElementById ('inputUsuario'); 

/*------------------------- Otras variables -----------------------------*/

const cardsContainer = document.querySelector ('.cards-container'); // Contenedor de productos
const exit = document.querySelector ('#exit'); //Exit
let productList = []; //Arreglo de productos
let card = []; // Arreglo del carrito
const myOrderContent = document.querySelector ('.my-order-content'); // Contenedor de carrito
const cardCounter = document.getElementById ('cardCounter'); // Elementos carrito
const totalPrice = document.getElementById ('totalPrice'); // Precio total del carrito
const btnEmptyCard = document.getElementById ('emptyCard'); // Vaciar carrito

/*------------------------- Variables Formulario de compra -----------------------------*/

const btnCheck = document.getElementById ('checkout');
let formContact = document.getElementById ('formContact');
let form = document.getElementById ('form');
let inputName = document.getElementById ('inputName');
let inputPhoneNumber = document.getElementById ('inputPhoneNumber');
let inputAddress = document.getElementById ('inputAddress');
const finish = document.getElementById ('finish');
const cancel = document.getElementById ('cancel');

/*------------------------- Escuchando -----------------------------*/

menuEmail.addEventListener ('click', toggleDesktopMenu); // Abrir desktop menu
menuCarritoIcon.addEventListener ('click', toggleCarritoAside); // Abrir aside
btnCheck.addEventListener ('click', showForm); // Mostrar formulario de compra
identificationForm.onsubmit = (event) => identifyUser (event); // Formulario de usuario
form.onsubmit  = (event) => values (event); // Formulario de compra

/*------------------------- Funciones -----------------------------*/

function toggleDesktopMenu () { //Si abrimos el menu se cierra el carrito
    
    const isAsideClosed = aside.classList.contains('inactive');

    !isAsideClosed && aside.classList.add ('inactive'); //Reduccion de un condicional - Comparacion con aside
    
    desktopMenu.classList.toggle ('inactive'); //Actividad individual Desktop Menu
};

function toggleCarritoAside () { // Si abrimos el carrito se cierra el menu

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    !isDesktopMenuClosed && desktopMenu.classList.add ('inactive'); //Reduccion de un condicional - Comparacion con el Desktop Menu

    aside.classList.toggle ('inactive'); //Actividad individual aside
};

async function consultarJson () { //LLamando a JSON
    /* await */ /* fetch ('../products.json')
    .then ((response) => response.json())
    .then ((info) => {
        console.log(info)
        productList = [...info]
        pain()
    })
    .catch(error => console.log(error.message) ); */
    try {
        const response = await fetch ('../products.json');
        const info = await response.json();
        productList = [...info]
        pain()
    } catch (error) {
        console.log(error);
    }
};

consultarJson();

function pain() { //Pintar los productos en el HTML
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
            
            if (user) {
                addToCard (product.id)
                Toastify ({
                    text: "You added " + product.name,
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "bottom", 
                    position: "right", 
                    stopOnFocus: true, 
                    style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function (){} 
                }).showToast ();
            } else {
                Swal.fire('Enter the email before adding a product');
            }
        })
    })
};

function identifyUser (event) { //Identificar usuario
    event.preventDefault()
    user = inputUsuario.value
    identificationForm.reset()
    updateUser()
    showUserEmail()
};

function updateUser () { // Guardar usuario en localStorage
    localStorage.setItem ('user', user)
};

function showUserEmail () { // Mostrar usuario
    identificationContainer.hidden = true
    userContainer.hidden = false
    userEmail.innerHTML += `<p>${user}</p>`
};

const addToCard = (productId) => { //Agregar producto al carrito + toas
            const item = productList.find ((prod) => prod.id === productId);
            card.push(item);
            updateCart();
};

const updateCart = () => { //Pintando elementos en el carrito

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
        shoppingPPrice.innerText = '$' + ' ' + prod.price;

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
    totalPrice.innerText = 'u$s' + ' ' + card.reduce((acc, prod) => acc + prod.price, 0);
};

document.addEventListener ('DOMContentLoaded', () => { //Agregando elementos en el localStorage
    if (localStorage.getItem ('card')) {
        card = JSON.parse(localStorage.getItem ('card'));
        updateCart ();
    }
    let savedUser = localStorage.getItem ('user');
    if (savedUser) {
        user = savedUser
        showUserEmail ()
    }
});

const btnDelete = (prodId) => { // Eliminar producto del carrito + Sweet
    Swal.fire({
        title: 'Are you sure?',
        text: "You will not buy this spectacular game?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Deleted!',
            'Your product has been deleted.',
            'success'
            )
            const item = card.find((prod) => prod.id === prodId)
            const indice = card.indexOf(item);
            card.splice(indice, 1);
            if (card.length === 0) localStorage.removeItem ('card');;
            updateCart ();
        }
    })
};

btnEmptyCard.addEventListener ('click', () => { //Vaciar carrito
    card.length = 0;
    localStorage.removeItem ('card');
    updateCart ();
    Swal.fire({
        title: 'are you a player?',
        text: 'You removed all the products! = (',
        imageUrl: 'https://acegif.com/wp-content/uploads/2022/fzk5d/65-all-pacman-ghosts-are-angry-acegif.gif',
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
});

function showForm () { // Mostrar formulario de compra
    if( card != 0) {
    formContact.hidden = false;
    } else {
        Swal.fire({
            title: 'ups!',
            text: 'Add products to cart.',
            imageUrl: 'https://acegif.com/wp-content/uploads/2022/fzk5d/12-lightning-ghosts-acegif.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }
} 

function values (event) { // Formulario de compra
    event.preventDefault();
    let name = inputName.value;
    let phone = inputPhoneNumber.value;
    let address = inputAddress.value;
    console.log (name)
    console.log (phone)
    console.log (address)
    Swal.fire({
        title: 'Felicidades!',
        text: 'We thank you for your purchase ' + name + ',' + ' we will be sending you a message to ' + phone + ' before sending the products to ' + address + '.' + ' Good luck, have fun!',
        imageUrl: 'https://acegif.com/wp-content/uploads/2022/fzk5d/64-angry-red-ghost-acegif.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom',
    })
    formContact.hidden = true;
    card.length = 0;
    localStorage.removeItem ('card');
    updateCart ();
}

form.onreset  = (event) => formClosed (event);

function formClosed () { // Cerrando formulario de compra
    formContact.hidden = true;
}

exit.addEventListener ('click', () => { //Saliendo y limpiando storage
    Swal.fire({
        title: 'Are you sure?',
        text: "Al salir se eliminaran los productos del carrito tambien!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Vuelve pronto!',
            )
            card.length = 0;
            localStorage.clear ();
            updateCart ();
            identificationContainer.hidden = false;
            userContainer.hidden = true;
            desktopMenu.classList.toggle ('inactive');
            setTimeout ( () => { window.location.reload () }, 1500);
        }
    })
});
/*-------------------------------------------------------------*/