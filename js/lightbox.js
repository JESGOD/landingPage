const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector(".agregar-imagen");
const contenedorLight =document.querySelector(".imagen-light");

const closeBurger = document.querySelector(".close");
const iconoBurger = document.querySelector(".icono-burger");

imagenes.forEach(function(imagen){
    imagen.addEventListener("click",function(){
        aparecerImagen(imagen.getAttribute("src")); /*estamos obteniendo el atributo src(direccion de la imagen) */
        contenedorLight.classList.add("show-lightbox"); /*con la clase show hacemos aparecer el lightbox que estaba en traslate(100%)*/
        imagenesLight.classList.add("show-image-light"); /*con show-imagen-light hacemos aparecer la imagen del lightbox que estaba en escala(0) */
        iconoBurger.classList.add("hidde-icono-burger");
    })
 })

 function aparecerImagen(imagen){ /* resive la direccion de la img y se la agrega a la img del lightbox*/
    imagenesLight.src=imagen;
 }

 closeBurger.addEventListener("click",function () {
    contenedorLight.classList.remove("show-lightbox");
    imagenesLight.classList.remove("show-image-light");
    iconoBurger.classList.remove("hidde-icono-burger");
    
 })

 contenedorLight.addEventListener("click", function(e){
    if(e.target != imagenesLight){
        contenedorLight.classList.remove("show-lightbox");
        imagenesLight.classList.remove("show-image-light");
        iconoBurger.classList.remove("hidde-icono-burger");
    }
 })