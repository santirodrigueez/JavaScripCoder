
let carrito=[];

function minitorta (nombre, tamaño, precio) {
    this.nombre=nombre;
    this.tamaño=tamaño;
    this.precio=precio;
}

const MinitortaBrownie=new minitorta ("Brownie", "10.10", "1200");
const MinitortaCheescake=new minitorta ("Cheescake", "10.10", "1200");
const MinitortaRicota=new minitorta ("Ricota", "10.10", "900"); 
const MinitortaChocotorta=new minitorta ("Chocotorta", "10.10", "1200");
const MinitortaChocotortaMerengue=new minitorta ("ChocotortaMerengue", "10.10", "1200");
const MinitortaLasagna=new minitorta ("Lasagna", "10.10", "1200");
const MinitortaMousse=new minitorta ("Mousse", "10.10", "1200");
const MinitortaOreoDDL=new minitorta ("OreoDDL", "10.10", "1200");
const MinitortaOreoVainilla=new minitorta ("OreoVainilla", "10.10", "1200");
const MinitortaTartaFrutos=new minitorta ("TartaFrutos", "10.10", "900");
const MinitortaCocoDDL=new minitorta ("CocoDDL", "10.10", "900");
const MinitortaLemonpie=new minitorta ("Lemonpie", "10.10", "900");

let minitorta1=document.getElementById("MinitortaBrownie");
let minitorta2=document.getElementById("MinitortaCheescake");
let minitorta3=document.getElementById("MiniLemon");
let minitorta4=document.getElementById("MinitortaRicota");
let minitorta5=document.getElementById("MiniCocoDDL");
let minitorta6=document.getElementById("MinitortaChocotorta");

minitorta1.onclick=()=>{
    swal.fire({
        title: "Se agrego un producto al carrito!",
        text: "Agregaste un mini Brownie",
        icon: "success",
        button: "Aww yiss!",
      });
    carrito.push(MinitortaBrownie);
    console.log(carrito);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}
minitorta2.onclick=()=>{
    swal.fire({
        title: "Se agrego un producto al carrito!",
        text: "Agregaste un mini Cheescake",
        icon: "success",
        button: "Aww yiss!",
    });    
    carrito.push(MinitortaCheescake);
    console.log(carrito);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}
minitorta3.onclick=()=>{
    swal.fire({
        title: "Se agrego un producto al carrito!",
        text: "Agregaste un mini Lemonpie",
        icon: "success",
        button: "Aww yiss!",
    });    
    carrito.push(MiniLemon);
    console.log(carrito);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}
minitorta4.onclick=()=>{
    swal.fire({
        title: "Se agrego un producto al carrito!",
        text: "Agregaste una mini Ricota",
        icon: "success",
        button: "Aww yiss!",
    });    
    carrito.push(MinitortaRicota);
    console.log(carrito);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}
minitorta5.onclick=()=>{
    swal.fire({
        title: "Se agrego un producto al carrito!",
        text: "Agregaste un mini Coco y dulce de leche",
        icon: "success",
        button: "Aww yiss!",
    });    
    carrito.push(MiniCocoDDL);
    console.log(carrito);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}
minitorta6.onclick=()=>{
    swal.fire({
        title: "Se agrego un producto al carrito!",
        text: "Agregaste una mini Chocotorta",
        icon: "success",
        button: "Aww yiss!",
    });    
    carrito.push(MinitortaChocotorta);
    console.log(carrito);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

function obtenerDatos(){
    const URLGET="https://api.itbook.store/1.0/new";
    fetch(URLGET)
   .then (resultado => resultado.json())
   .then ( libros => {
    console.log(libros.books);
         })
    }
  obtenerDatos();  