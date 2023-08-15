/*
Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

class Tarea{
    constructor(titulo,descripción,fechaVenc){
this.titulo = titulo;
this.descripción = descripción;
this.fechaVenc = new Date(fechaVenc)
    }
}

class GestorTareas{
    constructor(espaciosDisponibles){
        this.tareas = [];
        this.espaciosDisponibles = espaciosDisponibles || 10;
    }

    addTarea(tarea){
        if(this.espaciosDisponibles === this.tareas.length){
            console.log("No se puede agregar por tonto(falta de espacio)")
        }
        this.tareas.push(tarea)
    }
    existencias(search){
        const coincidencia = this.tareas.find(function(item){
            return item.titulo.toLowerCase() === search.toLowerCase()
        });
        if(coincidencia){
            console.log("La tarea existe")
        } else{
            console.log("La tarea NO existe bobalicon")
        }
    }
    buscarTarea(tituloABuscar) {
        const coincidencia = this.tareas.find((item) => {
          return item.titulo.toLowerCase() === tituloABuscar.toLowerCase();
        });
    
        if (coincidencia) {
          console.log('Tarea encontrada:', coincidencia);
        } else {
          console.log('No se encontró esa tarea');
        }
      }
      listaTareas() {
        this.tareas.forEach((item, index) => {
          const fecha = item.fechaVenc.toLocaleDateString();
          const hoy = new Date();
          const diferencia = Math.ceil(
            (item.fechaVenc - hoy) / (1000 * 24 * 60 * 60)
          ); // Number of seconds in a day = 24 * 60 * 60 = 86400 seconds;
          console.log(
            `${index + 1} - ${item.titulo} - ${
              item.descripcion
            } - ${fecha} - Faltan ${diferencia} días `
          );
        });
      }
      eliminarTarea(tituloAEliminar) {
        const indice = this.tareas.findIndex((item) => {
          return item.titulo.toLowerCase() === tituloAEliminar.toLowerCase();
        });
    
        if (indice === -1) {
          console.log('No se encontró la tarea a eliminar');
          return;
        }
    
        this.tareas.splice(indice, 1);
    
        console.log(`Se eliminó la tarea con título ${tituloAEliminar}`);
      }
      fullList() {
        if (this.tareas.length === this.limite) {
          console.log('Lista llena');
        } else {
          console.log('Lista no completa');
        }
      }
    
      disponibilidad() {
        const diferencia = this.limite - this.tareas.length;
    
        console.log(`Quedan ${diferencia} huecos disponibles`);
      }

    }

const crearTarea = () => {
  const titulo = prompt('Introduzca el título');
  const descripcion = prompt('Introduzca alguna description');
  const fechaVenc = prompt('Introduzca la fecha de vencimiento');

  // Formatear la fecha!!!!!!!!!!

  const año = fechaVenc.split('/')[2];
  const mes = fechaVenc.split('/')[1];
  const dia = fechaVenc.split('/')[0];


  const fecha = `${año}-${mes}-${dia}`;



  const tarea = new Tarea(titulo, descripcion, fecha);

  return tarea;
};


let limite = prompt('Ingrese el limite del gestor');

if (limite === null || isNaN(limite)) {
  console.log('No ingresó un limite adecuado, se utilizará 10 para el límite');
  limite = 10;
}


const gestor = new GestorTareas(limite);


while (true) {
  const opcion = prompt(`
Menú de Gestión de Tareas:
1. Agregar Tarea
2. Buscar Tarea
3. Listar Tareas
4. Eliminar Tarea
5. Verificar Lista Completa
6. Ver Huecos Disponibles`);

  if (opcion === null) {
    break;
  }

  switch (opcion) {
    case '1': {
      const nuevaTarea = crearTarea();
      gestor.añadirTarea(nuevaTarea);
      console.log("")
      break;
    }
    case '2': {
      const titulo = prompt('Ingrese el titulo a buscar');

      gestor.buscarTarea(titulo);
      console.log("")
      break;
    }
    case '3': {
      gestor.listarTareas();
      console.log("")
      break;
    }
    case '4': {
      const titulo = prompt('Ingrese el titulo a buscar');

      gestor.eliminarTarea(titulo);
      console.log("")
      break;
    }
    case '5': {
      gestor.listaCompleta();
      console.log("")
      break;
    }
    case '6': {
      gestor.huecosDisponibles();
      console.log("")
      break;
    }
    default: {
      console.log('Introduzca un número válido');
      console.log("")
    }
  }
}
