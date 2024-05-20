
const productos = ["Altavoces", "Microfonos"]
const microfonos=["Shure","Senheisser","Rode","Berhinger"]

class Altavoces{
    constructor(marca,referencia,precio){
        this.marca = marca;
        this.referencia = referencia;
        this.precio = precio;
    }
}
const Altavoz1 = new Altavoces ("JBL","Eon","2`500.000")
const Altavoz2 = new Altavoces ("JBL","Subwoofer","3`250.000")
const altavoces=[Altavoz1,Altavoz2,]

let AltavocesEnTexto = JSON.stringify("altavoces")

localStorage.getItem("altavoces",AltavocesEnTexto)

console.log(Altavoz1,Altavoz2)
console.log(AltavocesEnTexto)

let AltavocesLook = JSON.parse(localStorage.getItem(altavoces))



class Microfonos{
    constructor(marca,referencia,precio){
        this.marca = marca
        this.referencia = referencia;
        this.precio = precio;
    }
}
const ContainerAltavoces = document.getElementById("altavoces") 
const ContainerMicrofocos = document.getElementById("microfonos")

altavoces.forEach((producto) => {
    ContainerAltavoces.innerHTML += `
    <div class="card-item">
    <h2> ${producto}</h2>
    <button class="addCar">Agregar a carrito</button>
    </div>` 
}); 
microfonos.forEach((producto) => {
    ContainerMicrofocos.innerHTML += `
    <div class="card-item">
    <h2> ${producto}</h2>
    <button class="addCar">Agregar a carrito</button>
    </div>` 
}); 

/* function verProductos(){  
    productos.altavoces.forEach((producto) => {
        Container.innerHTML += `
        <div>
        <h2> ${producto}</h2
        
        </div>` 
    });  
}
function verProductos2(){  
    productos.Microfonos.forEach((producto) => {
        Container.innerHTML += `
        <div>
        <h2> ${producto}</h2
        
        </div>` 
    });  
} */

/* const botonVer = document.getElementsByClassName("botonVer")
const botonVerArray = Array.from(botonVer)
botonVerArray.forEach((ver) => {
    ver.addEventListener("click",(e)=>{
        verProductos()
        console.dir(e.target.parentElement.children[0].innertext)
    })
}
) */


/* productos.altavoces.forEach((item) => {
    Container.innerHTML += `
    <div>
    <h2> ${item}</h2>
    <button class="botonVer">ver</button>
    </div>` 
});  */
/* verProductos()  */
   /*  const Container = document.createElement("div");
    contenedor.innerText= producto.producto;
    const contenedor1 = document.createElement("div");
    const item = document.createElement("h3");
    item .innerText=productos.altavoces
    contenedor1.appendChild(item);

/* productos.altavoces.forEach((item) => {
    ItemContainer.innerHTML += `
    
    
    <li>
            ${item}
            </li>
        `
    
}); */

/* 
const contenedor = document.createElement("div");
const titulo = document.createElement("h2");
const botonAgregar = document.createElement("button");

titulo.textContent = productos
botonAgregar.innerText = "agregar"

contenedor.appendChild (titulo);
contenedor.appendChild (botonAgregar); */
/* console.log(altavoces) */

    