
function saludar() {
    alert("Bienvenido a nuestra pagina!!")
}
saludar();

const carrito=[];

function minitorta (nombre, tamaño, precio) {
    this.nombre=nombre;
    this.tamaño=tamaño;
    this.precio=precio;
}

const MiniortaBrownie=new minitorta (">Brownie", "10.10", "1200");
const MiniortaCheescake=new minitorta ("Cheescake", "10.10", "1200");
const MiniortaRicota=new minitorta ("Ricota", "10.10", "900"); 
const MiniortaChocotorta=new minitorta ("Chocotorta", "10.10", "1200");
const MiniortaChocotortaMerengue=new minitorta ("ChocotortaMerengue", "10.10", "1200");
const MiniortaLasagna=new minitorta ("Lasagna", "10.10", "1200");
const MiniortaMousse=new minitorta ("Mousse", "10.10", "1200");
const MiniortaOreoDDL=new minitorta ("OreoDDL", "10.10", "1200");
const MiniortaOreoVainilla=new minitorta ("OreoVainilla", "10.10", "1200");
const MiniortaTartaFrutos=new minitorta ("TartaFrutos", "10.10", "900");
const MiniortaCocoDDL=new minitorta ("CocoDDL", "10.10", "900");
const MiniortaLemonpie=new minitorta ("Lemonpie", "10.10", "900");


let minitorta1=document.getElementById("MinitortaBrownie");
let minitorta2=document.getElementById("MinitortaCheescake");
let minitorta3=document.getElementById("MiniLemon");
let minitorta4=document.getElementById("MinitortaRicota");
let minitorta5=document.getElementById("MiniCocoDDL");
let minitorta6=document.getElementById("MinitortaChocotorta");

minitorta1.onclick=()=>{
    alert("Agregaste un mini brownie al carrito");
    carrito.push(MinitortaBrownie);
    console.log(carrito);
}
minitorta2.onclick=()=>{
    alert("Agregaste un mini cheescake al carrito");
    carrito.push(MinitortaCheescake);
    console.log(carrito);
}
minitorta3.onclick=()=>{
    alert("Agregaste un mini lemon al carrito");
    carrito.push(MiniLemon);
    console.log(carrito);
}
minitorta4.onclick=()=>{
    alert("Agregaste un mini ricota al carrito");
    carrito.push(MinitortaRicota);
    console.log(carrito);
}
minitorta5.onclick=()=>{
    alert("Agregaste un mini cheescake de chocolate al carrito");
    carrito.push(MiniCocoDDL);
    console.log(carrito);
}
minitorta6.onclick=()=>{
    alert("Agregaste un mini chocotorta al carrito");
    carrito.push(MinitortaChocotorta);
    console.log(carrito);
}
