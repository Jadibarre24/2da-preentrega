let inventario = document.getElementsByClassName  ("card-item")
const Altavoces = document.getElementById ("Altavoces") 
const Microfonos = document.getElementById ("Microfonos")
const Bases = document.getElementById ("Bases")
const Soportes = document.getElementById ("Soportes")
const Luces = document.getElementById ("Luces")
const Consolas = document.getElementById ("Consolas")
const productos = [Altavoces, Microfonos,Bases,Soportes,Luces,Consolas]
const agregarItem = document.getElementsByClassName ("button")
const agregarItemarray = Array.from(agregarItem)
agregarItemarray.forEach((button)=>{button.addEventListener("click",(e)=>{
    console.log(e.target.parentElement.children[0].innerText)
})})
console.log(agregarItemarray)