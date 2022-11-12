const btn_burger = document.querySelector(".icono-burger");
const menu_burger = document.querySelector(".menu-navegacion");

const ulMenuBurger= document.querySelector(".opciones-menu");
const liMenuBurger= document.querySelector(".opciones");
const linksMenuBurger= document.querySelectorAll(".links");





btn_burger.addEventListener("click", function(){
    menu_burger.classList.toggle("mostrar-menu-burger");
    
})

window.addEventListener("click", function(e){
    if((e.target != btn_burger)&&(e.target != menu_burger)&&(e.target !=ulMenuBurger)&&(e.target !=liMenuBurger)&&(e.target !=linksMenuBurger)) /*falta solucionar el error cuando se selecciona un a en el menu este se cierra*/
    {
        menu_burger.classList.remove("mostrar-menu-burger");
        
    }
   
})

