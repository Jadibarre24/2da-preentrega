// let inventario = document.getElementsByClassName  ("card-item")
// const Altavoces = document.getElementById ("Altavoces") 
// const Microfonos = document.getElementById ("Microfonos")
// const Bases = document.getElementById ("Bases")
// const Soportes = document.getElementById ("Soportes")
// const Luces = document.getElementById ("Luces")
// const Consolas = document.getElementById ("Consolas")
// const productos = [Altavoces, Microfonos,Bases,Soportes,Luces,Consolas]

// const agregarItem = document.getElementsByClassName ("button")
// const addItems = []

// const refreshCar =() =>{
//     agregarItem.forEach((agregarItem)=>{
//         addItems.innerHTML += agregarItem
//     }
// )
// }

// const agregarItemarray = Array.from(agregarItem)

// agregarItemarray.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         const ItemContainer= e.target.parentElement.children[0].innerText
//         addItems.push(ItemContainer)
//         refreshCar()
//     })

// })

// console.log(agregarItemarray)
const inventario = document.querySelectorAll(".card-item");
const productos = document.querySelectorAll(".button");
const addItems = [];
const Car = document.getElementById("carrito")

const chargercar = () =>{
    Car.innerHTML = " "
    addItems.forEach((productos)=>{
        Car.innerHTML += productos
    })
}

productos.forEach((button) => {
    button.addEventListener("click", (e) => {
        const ItemContainer = e.target.parentElement.innerHTML;
        addItems.push(ItemContainer);
        chargercar()
        console.log(e);
    });
});
