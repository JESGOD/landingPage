const btn_burger = document.querySelector(".icono-burger");
const menu_burger = document.querySelector(".menu-navegacion");
const header = document.querySelector("header");
btn_burger.addEventListener("click", function(){
    menu_burger.classList.toggle("mostrar-menu-burger");
    
})
