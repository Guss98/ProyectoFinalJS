
let iconoCarrito = document.querySelector('.icono-carrito');
let carrito = document.querySelector('#compras');
let cerrarCarrito = document.querySelector('#boton-cerrar');
let iconoNav = document.querySelector('#iconoNavbar');
//Eliminar cosas del carrito
export function ready() {
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
    agregarLocalStorage();
}

}
export function eliminar(event) {
    var basuraClickeada = event.target;
    basuraClickeada.parentElement.remove();
    actualizar();
}


export function cantidadCambiada(event){
    var input =event.target;
    if (isNaN(input.value) || input.value <=0){
        input.value =1;
    }
    actualizar();
}

export function ponerEnCarrito (event){
    var button = event.target;
    var productosTienda =button.parentElement;
    var titulo = productosTienda.getElementsByClassName('titulo-producto')[0].innerText;
    var costo = productosTienda.getElementsByClassName('precio')[0].innerText;
    var foto = productosTienda.getElementsByClassName('foto')[0].src;
    sumarAlCarrito(titulo, costo, foto);
    actualizar();
}

export function sumarAlCarrito(titulo, costo, foto){
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
            agregarLocalStorage();
           
} 



//Actualizar Total
export function actualizar (){
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
export function abrirCerrarCarrito() {
    iconoCarrito.onclick = () => {
        carrito.classList.add('active');
        lista.classList.toggle('show');
    };

    cerrarCarrito.onclick = () => {
        carrito.classList.remove('active');
    };
    
};

export function agregarLocalStorage () {
    let carro = document.getElementsByClassName('contenido-carrito');
    localStorage.setItem('carro', JSON.stringify(carro))
  }
  
window.onload = function() {
    let storage = JSON.parse(localStorage.getItem('carro'));
    if (storage){
        carro = storage;
        ready();
    }
  
}