alert('Vinculado');

let precioProducto1 = 500;
let cantidadProducto1 = 1;
let precioProducto2 = 800;
let cantidadProducto2 = 2;
let precioProducto3 = 1500;
let cantidadProducto3 = 1;
const btn = document.querySelector ('#btnCalcular');
const pResult = document.querySelector ('#result');

btn.addEventListener('click', sumarPreciosProductos);

function sumarPreciosProductos (event) {

    let totalProducto1 = 0;
    let totalProducto2 = 0;
    let totalProducto3 = 0;
    let sumaPrecioProducto1 = 0;
    let sumaPrecioProducto2 = 0;
    let sumaPrecioProducto3 = 0;

    if (cantidadProducto1 == 1) {
        totalProducto1 = precioProducto1;
    } 
    else {
        for (let i = 1; i < cantidadProducto1; i++) {
            sumaPrecioProducto1 = precioProducto1 + precioProducto1;
        }
        totalProducto1 = sumaPrecioProducto1;
    }

    if (cantidadProducto2 == 1) {
        totalProducto2 = precioProducto2;
    } 
    else {
        for (let i = 1; i < cantidadProducto2; i++) {
            sumaPrecioProducto2 = precioProducto2 + precioProducto2;
        }
        totalProducto2 = sumaPrecioProducto2;
    }

    if (cantidadProducto3 == 1) {
        totalProducto3 = precioProducto3;
    } 
    else {
        for (let i = 1; i < cantidadProducto3; i++) {
            sumaPrecioProducto3 = precioProducto3 + precioProducto3;
        }
        totalProducto3 = sumaPrecioProducto3;
    }

    const sumaTotal = totalProducto1 + totalProducto2 + totalProducto3;
    pResult.innerText = "El total de la compra es: " + sumaTotal;
}


