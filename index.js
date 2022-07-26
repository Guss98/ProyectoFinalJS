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





let iconoCarrito = document.querySelector('.icono-carrito');
let carrito = document.querySelector('#compras');
let cerrarCarrito = document.querySelector('#boton-cerrar');
let iconoNav = document.querySelector('#iconoNavbar');

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

//Eliminar cosas del carrito
function ready() {
    var eliminarObjetoCarrito = document.getElementsByClassName('tacho');
    console.log(eliminarObjetoCarrito);
    for (var i = 0; i < eliminarObjetoCarrito.length; i++) {
        var basura = eliminarObjetoCarrito[i];
        basura.addEventListener('click', eliminar);
    }

    var inputCantidad = document.getElementsByClassName('cantidad')
    for (var i = 0; i < inputCantidad.length; i++){
        var input = inputCantidad[i]
        input.addEventListener('change', cantidadCambiada)
    }
    var agregarCarrito = document.getElementsByClassName('carrito');
    for (var i = 0; i < agregarCarrito.length; i++){
    var button = agregarCarrito[i];
    var costo = agregarCarrito[i];
    button.addEventListener('click', ponerEnCarrito);
}
}
function eliminar(event) {
    var basuraClickeada = event.target;
    basuraClickeada.parentElement.remove();
    actualizar();
}


function cantidadCambiada(event){
    var input =event.target;
    if (isNaN(input.value) || input.value <=0){
        input.value =1;
    }
    actualizar();
}

function ponerEnCarrito (event){
    var button = event.target;
    var productosTienda =button.parentElement;
    var titulo = productosTienda.getElementsByClassName('titulo-producto')[0].innerText;
    var costo = productosTienda.getElementsByClassName('precio')[0].innerText;
    var foto = productosTienda.getElementsByClassName('foto')[0].src;
    sumarAlCarrito(titulo, costo, foto);
    actualizar();
}

function sumarAlCarrito(titulo, costo, foto){
    var boxCarrito = document.createElement('div');
    boxCarrito.classList.add('estiloCarrito');
    var cartItems= document.getElementsByClassName('contenido-carrito')[0];
    var nombreCartItems = cartItems.getElementsByClassName('titulo-prod');
    var contenidoBox = `<div class="caja-carrito">
                    <img src="${foto}" class="carrito-img" alt="">
                    <div class="detalles-carrito">
                    <div class="titulo-prod">${titulo}</div>
                    <div class="precio-prod">${costo}</div>
                    <input type="number" value="1" class="cantidad">
                    </div>
                    <ion-icon name="trash-outline" class="tacho"></ion-icon></div>`;


boxCarrito.innerHTML = contenidoBox;
cartItems.append(boxCarrito);                     
boxCarrito
            .getElementsByClassName('tacho')[0]
            .addEventListener('click', eliminar);
boxCarrito            
            .getElementsByClassName('cantidad')[0]
            .addEventListener('change',cantidadCambiada);
} 



//Actualizar Total
function actualizar (){
    var contenidoCarrito = document.getElementsByClassName('contenido-carrito')[0];
    var cajasCarrito = contenidoCarrito.getElementsByClassName('caja-carrito');
    var total = 0;
    for (var i = 0; i < cajasCarrito.length; i++) {
        var cajaCarrito = cajasCarrito[i];
        var precioElemento = cajaCarrito.getElementsByClassName('precio-prod')[0];
        var cantidadElementos = cajaCarrito.getElementsByClassName('cantidad')[0];
        var precio = parseFloat(precioElemento.innerText.replace('$', ''));
        var cantidad = cantidadElementos.value;
        total = total + (precio * cantidad);
    }
        total = Math.round(total*100)/100;

        document.getElementsByClassName('precio-final')[0].innerText = '$' + total;
    }



//Abre y cierra el carrito
function abrirCerrarCarrito() {
    iconoCarrito.onclick = () => {
        carrito.classList.add('active');
    };

    cerrarCarrito.onclick = () => {
        carrito.classList.remove('active');
    };
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
  
