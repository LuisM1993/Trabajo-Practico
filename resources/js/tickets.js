// funcion del menu hamburguesa:
const btnMenu = document.querySelector(".menu");
const menu = document.querySelector("#menu_desplegable");
btnMenu.addEventListener("click", function(){
    menu.classList.toggle("mostrar");
});
//-----------------||-||-||-----------------\\

//funcion para darle estilo a la caja de la categoria seleccionada:
function laOption(){
    let laCategoria = document.getElementById("categoria").value;
    let estu = document.querySelector(".container_a");
    let trai = document.querySelector(".container_b")
    let jun = document.querySelector(".container_c")
switch (laCategoria){
    case "Estudiante": estu.classList.add("laOption");
                       trai.classList.remove("laOption");
                       jun.classList.remove("laOption"); 
        break;
        case "Traineer": trai.classList.add("laOption");
                          estu.classList.remove("laOption"); 
                          jun.classList.remove("laOption");   
        break;
        case "Junior": jun.classList.add("laOption");
                        estu.classList.remove("laOption"); 
                        trai.classList.remove("laOption"); 
        break;
        default:    estu.classList.remove("laOption"); 
                    trai.classList.remove("laOption");
                    jun.classList.remove("laOption")
    }
}
//-----------------||-||-||-----------------\\

//Expresiones regulares:
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,16}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{3,16}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    cantidad: /^\d{1,2}$/
}

//Validacion de campos:
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const validacion = {
    nombre: false,
    apellido: false,
    correo: false,
    cantidad: false
}
const requerido = {
    nombre: "Nombre solo tiene que tener de 3 a 16 caracteres y solo puede contener LETRAS!",
    apellido: "Apellido solo tiene que tener de 3 a 16 caracteres y solo puede contener LETRAS!",
    correo: "El Correo es incorrecto, verifique!!",
    cantidad: "La Cantidad de tickets solo puede contener numeros del 1 al 99"
}
const validar = (expresion, input, campo) => {
            if(expresion.test(input.value)){
                document.getElementById(`formulario_${campo}`).classList.remove("campoIncorrecto");
                document.getElementById("mensaje").classList.remove("mensajError");
                document.getElementById("total").classList.remove("ventanaError");
                document.getElementById("mensaje").textContent = ""
                validacion[campo] = true;
            
            }else{
                document.getElementById(`formulario_${campo}`).classList.add("campoIncorrecto");
                document.getElementById("mensaje").classList.add("mensajError");
                document.getElementById("mensaje").textContent = requerido[campo]
                document.getElementById("total").classList.add("ventanaError");
                validacion[campo] = false;
            }
}
const validacionDeCampo = (e) =>{
    switch (e.target.name) {
        case "nombre":
            validar(expresiones.nombre, e.target, "nombre");
            break
            case "apellido":
            validar(expresiones.apellido, e.target, "apellido");
            break
            case "correo":
            validar(expresiones.correo, e.target, "correo");
            break
            case "cantidad":
            validar(expresiones.cantidad, e.target, "cantidad");
            break
    }
}
inputs.forEach((input) =>{
    input.addEventListener("keyup", validacionDeCampo);
    input.addEventListener("blur", validacionDeCampo);
});



// funcion para calcular el descuento:
function calcular(){
    const valor = 500;
    let categoria = document.getElementById("categoria").value;
    const stringDeCantidad = document.getElementById("formulario_cantidad").value;
    const cantidad = parseInt(stringDeCantidad);
    switch(categoria){
        case "Estudiante": categoria = 80;
        break;
        case "Traineer": categoria = 50;
        break;
        case "Junior": categoria = 15;
        break;
        default: categoria = 0;
    };
    const descuento = valor * categoria / 100 ;
    const subTotal = valor - descuento;
    const total = subTotal * cantidad;
    return total;
}
//Funcion de la impresion del precio final en pantalla:
function valorTickets(){
    const mensaje = document.getElementById("mensaje");
    if(validacion.nombre && validacion.apellido && validacion.correo && validacion.cantidad){ 
    mensaje.textContent = `Total a pagar: $ ${calcular()}`
    formulario.reset()
    }else{
        mensaje.textContent = "Tienes algun ERROR en algun campo o Falta completar"
    }
    
}
//Funcion para borrar los campos rellenada en los inputs:
function borrar(){
    //document.getElementsByClassName("apellido").value = ""; --> asi no funcionaba
    document.querySelector(".nombre").value = "";
    document.querySelector(".apellido").value = "";
    document.querySelector(".correo").value = "";
    document.getElementById("formulario_cantidad").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("total").textContent = "";
}




