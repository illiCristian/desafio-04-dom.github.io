import { idAutoIncrementable, pedirMonto, pedirNumero, pedirString, ultimoId, validarNumero } from "./funciones.js";

class NuevaCompra {
  constructor(id, nombre, descripcion, monto) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.monto = monto;
  }
}

let compra1 = new NuevaCompra(1, "heladera", "heladera no frost", 23900);
let compra2 = new NuevaCompra(2, "garrafas", "garrafa 10kg", 18400);
let compra3 = new NuevaCompra(3, "microondas", "microondas de 24 lt", 11234);
let compra4 = new NuevaCompra(4, "cocina","cocina marca 'Domec' tipo Industrial",89000);

const arrayCompras = [];

arrayCompras.push(compra1, compra2, compra3, compra4);

console.log(arrayCompras);

// const crearCompra = (arrayCompras) => {
//   let ultimo = ultimoId(arrayCompras);
//   let id = idAutoIncrementable(ultimo.id),
//     nombre = pedirString("Ingrese el nombre de la compra"),
//     descripcion = pedirString("Ingrese la descripcion de la compra"),
//     monto =  pedirMonto("Ingrese el monto de la compra");

//   let compraNueva = new NuevaCompra(id, nombre, descripcion, monto);

//   arrayCompras.push(compraNueva);

//   return arrayCompras;
// };

// const fBorrarCompra = (arrayCompras) => {
//   let entrada = pedirString('Ingrese el nombre de la compra que desea borrar');
//   console.warn(entrada);
//   let nuevoArr = arrayCompras.filter(arr => arr.nombre !== entrada);
//   console.warn(nuevoArr);
//   return nuevoArr;
// }


// const fBuscarPorNombre = (arrayCompras) => {
//   let nombre = pedirString("Ingrese el nombre del producto").toLowerCase();
//   let encontrado = arrayCompras.find((el) => el.nombre === nombre);
//   let mensaje;
//   encontrado !== undefined
//     ? (mensaje = `La compra '${encontrado.nombre}' con la descripcion '${encontrado.descripcion}' y tiene un monto total de $'${encontrado.monto}'`)
//     : (mensaje = `El nombre: ${nombre} no fue encontrado en la lista`);

//   alert(mensaje);
// };

// const calcularPromedios = (arrayCompras) => {
//   let acum = 0;
//   for (let i = 0; i < arrayCompras.length; i++) {
//      acum += arrayCompras[i].monto;
//     //  console.log(arrayCompras[i].monto);
//     }
//   let promedio = acum / arrayCompras.length;
//   let mensaje = `El promedio total de las compras realizadas es = $ "${promedio}"`;
//     console.log(promedio);
//     alert(mensaje);
//   };
  
  

// let $compra = document.getElementById("crear-compra");
// $compra.addEventListener("click", () => crearCompra(arrayCompras));

// let contenedor = document.getElementById("contenedor");

 let $imprimir = document.getElementById("mostrar-compras");
 $imprimir.addEventListener("click", (e)=>{
    e.preventDefault();
    let $contenedor = document.getElementById('contenedor');

    $contenedor.innerHTML = "<h2>Lista de Compras guardadas</h2>";
    const $ul3 = document.createElement('ul'),
        $fragment = document.createDocumentFragment();
        arrayCompras.forEach((el)=>{
            const $li = document.createElement('li');
            $li.textContent = `Id: "${el.id}" Nombre: ${el.nombre} Descripcion: ${el.descripcion} Monto: $${el.monto}`;
            $fragment.appendChild($li);
        })

        $ul3.appendChild($fragment);
        document.body.appendChild($ul3);
      $contenedor.append($ul3);
 });

//  let $buscarNombre = document.getElementById("buscar-nombre");
//  $buscarNombre.addEventListener("click", () => fBuscarPorNombre(arrayCompras));
// const contenedorBuscar = document.getElementById("contenedor-buscar");

 const formulario = document.getElementById("form-buscar");
 const $div = document.createElement("div");

 formulario.addEventListener("submit", (e) => {
   e.preventDefault();
  //  let inputs = e.target.children;
   const $contenedorBuscar = document.getElementById("contenedor-buscar");

   $div.innerHTML = "";
   const $nombre = document.getElementById('monto-2').value;
   const formBuscar = document.getElementById("form-buscar");
   let producto = arrayCompras.find((item) => item.nombre === $nombre);
   
   if(!producto){
    $div.innerHTML = `<b>El valor ${$nombre} no se encuentra en las compras guardadas</b>`;
   }else{
   $div.innerHTML = `
     <b>Id: ${producto.id}</b>
     <b>Nombre: ${producto.nombre}</b>
     <b>$${producto.monto}</b>
   `;}
 
    $contenedorBuscar.appendChild($div);
    formBuscar.reset();
 });
// let $promedio = document.getElementById("mostrar-promedios");
// $promedio.addEventListener("click", () => calcularPromedios(arrayCompras));

// let $borrarCompra = document.getElementById("borrar-compra");
// $borrarCompra.addEventListener("click", () => fBorrarCompra(arrayCompras));

let $compraGuardada = document.getElementById("compra-guardada");

let $formulario = document.getElementById("formulario");
$formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  $compraGuardada.innerHTML = "";

  let nombre = document.getElementById("nombreForm").value,
  descripcion = document.getElementById("floatingDescripcion").value,
  monto = document.getElementById("montoForm").value;
  console.log(nombre,descripcion,monto);
  let ultimo = ultimoId(arrayCompras);
  let id = idAutoIncrementable(ultimo.id);
  const compraNueva = new NuevaCompra(id,nombre,descripcion,monto);
  $compraGuardada.innerHTML="<b> Compra Guardada correctamente</b> "
  $formulario.reset();
  console.log(compraNueva);
  arrayCompras.push(compraNueva);
  console.log(arrayCompras);
});
