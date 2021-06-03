// Variables y Selectores
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");
let presupuesto;
let bandera = 0;

// Eventos

eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", consultarPresupuesto);

  formulario.addEventListener("submit", agregarGasto);
}

// Clases

class Presupuesto {
  constructor(presupuesto) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }

  nuevoGasto(gasto) {
    this.gastos = [...this.gastos, gasto];
    //console.log(this.gastos);
    this.calcularRestante();
  }

  calcularRestante() {
    // reduce itera sobre los elementos del arreglo y va acumulando los valores en un GRAN total
    // total + gasto.cantidad -> seria como decir total=total+gastado.cantidad
    const gastado = this.gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );

    // console.log(gastado)

    this.restante = this.presupuesto - gastado;
    //console.log(this.restante)
  }

  eliminarGastos(id) {
    //console.log('eliminando gasto')
    //filter -> con este metodo vamos a traer a TODOS, excepto el id que vamos a eliminar
    this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
    //console.log(gastos)

    this.calcularRestante();
  }
}

class UI {
  insertarPresupuesto(cantidad) {
    // Destructuring
    const { presupuesto, restante } = cantidad;
    document.querySelector("#total").textContent = presupuesto;
    document.querySelector("#restante").textContent = restante;
  }

  mostrarAlerta(mensaje, tipo) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    divMensaje.textContent = mensaje;

    // Inserta en HTML
    document.querySelector(".primario").insertBefore(divMensaje, formulario);

    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  mostrarGastos(gastos) {
    // Limipamos el HTML - En gastos
    this.limpiarHTML();

    gastos.forEach((gasto) => {
      const { cantidad, nombre, id } = gasto;

      const nuevoGasto = document.createElement("li");
      nuevoGasto.className = `list-group-item d-flex justify-content-between align-items-center`;
      //nuevoGasto.setAttribute('data-id') = id
      nuevoGasto.dataset.id = id; // similares consetAttribute (nueva version)

      nuevoGasto.innerHTML = ` ${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span> `;

      // agrego delete btn
      const btnBorrar = document.createElement("button");
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.innerHTML = " Borrar &times";
      // lo vamos a agarrar con el data.id añadido
      // usamos arrow function para que ESPERE a que le DE click
      btnBorrar.onclick = () => {
        eliminarGasto(id);
      };

      // Si NO USARAMOS ARROW FUNCTION y usamos asi
      // btnBorrar.onclick = eliminarGasto(id) // LLAMARIA de una a la FUNCION sin ESPERAR el CLICK

      nuevoGasto.appendChild(btnBorrar);

      // Agrego al HTML
      gastoListado.appendChild(nuevoGasto);
    });
  }

  limpiarHTML() {
    while (gastoListado.firstChild) {
      gastoListado.removeChild(gastoListado.firstChild);
    }
  }

  actualizarRestante(restante) {
    document.querySelector("#restante").textContent = restante;
  }

  comprobarPresupuesto(presupuestObj) {
    const { presupuesto, restante } = presupuestObj;

    // Seleccionamos div
    const restanteDiv = document.querySelector(".restante");

    // comprobar 25% ; divido en 4 ; si presupuesto es 100, 100/4=25 ; y comparamos con los q nos queda
    if (presupuesto / 4 > restante) {
      //console.log('ya gastaste 75%')
      restanteDiv.classList.remove("alert-success", "alert-warning");
      restanteDiv.classList.add("alert-danger");
    } else if (presupuesto / 2 > restante) {
      // comprobar 50%
      restanteDiv.classList.remove("alert-success", "alert-danger");
      restanteDiv.classList.add("alert-warning");
    } else {
      restanteDiv.classList.remove("alert-danger", "alert-danger");
      restanteDiv.classList.add("alert-success");
    }

    // Si el total es 0 o MENOR
    /* if(restante <= 0){
      ui.mostrarAlerta('El presupuesto se ha Agotado', 'error')
      
      formulario.querySelector('button[type="submit"]').disabled=true
    }else{
      formulario.querySelector('button[type="submit"]').disabled = false;
    }*/

    if (restante <= 0) {
      ui.mostrarAlerta("El prespuesto se ha agotado.", "error");
      formulario.querySelector('button[type="submit"]').disabled = true;
      formulario
        .querySelector('button[type="submit"]')
        .classList.remove("alert-primary");
      formulario
        .querySelector('button[type="submit"]')
        .classList.add("bg-dark");
      //console.log(
      //  formulario
      //    .querySelector('button[type="submit"]')
      //    .classList.contains("bg-dark")
      //);
    } else if (
      restante > 0 &&
      formulario
        .querySelector('button[type="submit"]')
        .classList.contains("bg-dark")
    ) {
      ui.mostrarAlerta("El prespuesto se ha reembolsado correctamente.");
      formulario.querySelector('button[type="submit"]').disabled = false;
      formulario
        .querySelector('button[type="submit"]')
        .classList.remove("bg-dark");
      formulario
        .querySelector('button[type="submit"]')
        .classList.add("bg-primary");
    }
  }
}

// Instanciamos glob UI
const ui = new UI();

// Funciones

function consultarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cuál es tu presupuesto?");

  // Validaciön (vacio, cancelar, letra)
  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(presupuestoUsuario) ||
    presupuestoUsuario <= 0
  ) {
    window.location.reload();
  }

  presupuesto = new Presupuesto(presupuestoUsuario);

  ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
  e.preventDefault();

  // Extraemos data de form
  const nombre = document.querySelector("#gasto").value;
  const cantidad = Number(document.querySelector("#cantidad").value);

  // validaciön

  if (nombre === "" || cantidad === "") {
    ui.mostrarAlerta("Debe completar ambos campos", "error");
    limpiarForm(bandera);

    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.mostrarAlerta("Cantidad no válida", "error");
    bandera = 1;
    limpiarForm(bandera);

    return;
  }

  // Agregamos gasto

  // Generamos Object Literal de gasto ; nombre: nombre => queda 'nombre' nomäs por llamarse igual
  const gasto = { nombre, cantidad, id: Date.now() };

  // Nuevo gasto
  presupuesto.nuevoGasto(gasto);

  ui.mostrarAlerta("Gasto agregado correctamente");

  // Mostrar gastos
  const { gastos, restante } = presupuesto;
  ui.mostrarGastos(gastos);

  ui.actualizarRestante(restante);

  ui.comprobarPresupuesto(presupuesto);

  formulario.reset();
}

function limpiarForm(bandera) {
  if (bandera === 1) {
    document.querySelector("#cantidad").value = "";

    return;
  }

  formulario.reset();
}

function eliminarGasto(id) {
  // console.log(id)

  // Elimina GASTO del OBJETO
  presupuesto.eliminarGastos(id);

  // Elimina los gastos del HTML
  const { gastos, restante } = presupuesto;
  ui.mostrarGastos(gastos);

  ui.actualizarRestante(restante);

  ui.comprobarPresupuesto(presupuesto);
}
