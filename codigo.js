let cantidad = parseInt(prompt( "Cuantos productos desea agregar?"))
let precio = 1200;
let total = cantidad * precio;

if (total>=1200) {
    alert ("usted ha obtenido un descuento")
    let precioDescontado=total*0.9
    alert("tu precio con descuento es de $ "+precioDescontado)
    agradecer();
}

else if(total<1200) {
    alert ("gracias por tu compra, el total es de $ "+total)
}

// FUNIONES
function agradecer() {
    alert("Muchas gracias por tu compra")
}

function minitorta (nombre, tamaño, precio) {
    this.nombre=nombre;
    this.tamaño=tamaño;
    this.precio=precio;
}

const minitortaBrownie=new minitorta ("brownie, 10.10, 1200");
const minitortaCheescake=new minitorta ("cheescake, 10.10, 1200");
const minitortaTiramisu=new minitorta ("tiramisu, 10.10, 1200");
const minitortaRicota=new minitorta ("ricota, 10.10, 900");
const minitortaLemonpie=new minitorta ("Lemonpie, 10.10, 900");

console.log(minitortaRicota);