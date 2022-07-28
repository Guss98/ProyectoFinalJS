import {ready, abrirCerrarCarrito} from './carrito.js';


let productos = [
    {nombre: "Darth Vader",
     precio: "$800",   
     imagen: "./imagenes/darthVader.png",   
    },

    {nombre: "Snitch Dorada",
    precio: "$500",   
    imagen: "./imagenes/Snitch.png",   
   },

   {nombre: "Set Gamer",
   precio: "$2500",   
   imagen: "./imagenes/Banshe.png",   
  },

  {nombre: "Llaveros",
  precio: "$200",   
  imagen: "./imagenes/Naruto.png",   
 },
]




//Abrir y cerrar nav responsive

function abrirCerrarNavbar () {
    let lista = document.getElementById('lista');
    iconoNavbar.onclick = () => {
        lista.classList.toggle('show'); 
    };
    
};

abrirCerrarNavbar();

abrirCerrarCarrito();


if (document.readyState=='loading') {
    document.addEventListener('DOMContentLoaded', ready);
}
else {
    ready();
}

modificarElDOM();
//Capturar elementos del DOM
const buscardor = document.getElementById ('input');
const boton = document.getElementById ('boton');
const pre = document.getElementById('precioCreado');
const tit = document.getElementById("title");
const imagen = document.getElementById("divImg");



//funcion
boton.addEventListener("click", () => {
    let productoEncontrado = productos.find(
      (producto) => producto.nombre.toUpperCase() === input.value.toUpperCase()
    );
  
    sacarImagen();
  
    if (productoEncontrado=== undefined) {
      mostrarMensajeNoEncontrado();
    } else {
      mostrarObjetoEncontrado(productoEncontrado);
    }
    lista.classList.toggle('show');
  });

divCreado.addEventListener('click', () => {
    divCreado.style.display ='none';
})

//Modificar el DOM
function modificarElDOM() {
const divisor = document.createElement ('div');
divisor.id = "divCreado";
document.body.appendChild(divisor);

//Div que contiene los demas elementos
const divContenedor = document.createElement('div');
divContenedor.id = 'divCont';
divisor.appendChild(divContenedor);

//Imagen del elemento
const divisorImg = document.createElement("div");
divisorImg.id = "divImg";
divContenedor.appendChild(divisorImg);

//Div de titulo y Precio
const divisorInfo = document.createElement("div");
divisorInfo.id = "info";
divContenedor.appendChild(divisorInfo);

//Div de texto
const divisorTxt = document.createElement("div");
divisorTxt.id = "divText";
divisorInfo.appendChild(divisorTxt);

//Titulo
const titulo = document.createElement("h1");
const title = document.createTextNode("ar pizzas");
titulo.id = "title";
titulo.appendChild(title);
divisorTxt.appendChild(titulo);

//div de precio
const divPrecio = document.createElement("div");

divPrecio.id = "divPre";

divisorInfo.appendChild(divPrecio);

//Precio 
const precio = document.createElement("p");
const preciop = document.createTextNode("");
precio.id = "precioCreado";
precio.appendChild(preciop);
divPrecio.appendChild(precio);

}


function sacarImagen() {
    while (imagen.firstChild) {
        imagen.removeChild(imagen.firstChild);
    }
};

function mostrarObjetoEncontrado(productoEncontrado) {
    divCreado.style.display = "block";
    tit.style.display = "block";
    pre.style.display = "block";
    imagen.style.display = "block";
  
    tit.innerText = productoEncontrado.nombre;
    pre.innerText = productoEncontrado.precio;
    const foto = document.createElement("img");
    foto.setAttribute("src", productoEncontrado.imagen);
    foto.id = "fotoCreada";
    imagen.appendChild(foto);
  }

  function mostrarMensajeNoEncontrado() {
    divCreado.style.display = "block";
    tit.innerText = "Ups! Nos quedamos sin stock";
    tit.style.display = "block";

    pre.style.display = "none";
    tit.innerText = "Comunicate con nosotros";
    const foto = document.createElement("img");
    foto.setAttribute(
      "src",
      "https://d2r9epyceweg5n.cloudfront.net/stores/019/016/products/sin_stock_momentaneamente_web_2021131-a2a9ac204133e3bce516378427880774-1024-1024.jpg"
    );
    foto.id = "fotoCreada";
    imagen.appendChild(foto);
  }

