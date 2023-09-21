let btnMenu = document.getElementById("btn-open-menu")
let menu = document.getElementById("menu-mobile")

btnMenu.addEventListener("click", ()=>{
    menu.classList.toggle("menu-btn")
})

menu.addEventListener("click", ()=>{
    menu.classList.remove("menu-btn")
})