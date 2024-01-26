// Inventario inicial de mascotas.
let inventario = [
    { id: 1, nombre: 'Max', tipo: 'Perro' },
    { id: 2, nombre: 'Miau', tipo: 'Gato' },
    { id: 3, nombre: 'Coco', tipo: 'Pájaro' }
];

// Función para agregar una mascota al inventario.
function agregarMascota() {
    const nombre = prompt('Ingrese el nombre de la mascota:');
    const tipo = prompt('Ingrese el tipo de la mascota (Perro, Gato, Pájaro, etc.):');
    const id = inventario.length + 1;
    inventario.push({ id, nombre, tipo });
    alert('Mascota agregada: ' + nombre + ', Tipo: ' + tipo);
}

// Función para eliminar una mascota del inventario.
function eliminarMascota() {
    const nombre = prompt('Ingrese el nombre de la mascota a eliminar:');
    const mascotaEncontrada = inventario.find(masc => masc.nombre.toLowerCase() === nombre.toLowerCase());
    if (mascotaEncontrada) {
        inventario = inventario.filter(masc => masc.nombre.toLowerCase() !== nombre.toLowerCase());
        alert('Mascota eliminada: ' + nombre);
    } else {
        alert('Mascota no encontrada: ' + nombre);
    }
}

// Función para buscar una mascota en el inventario por nombre.
function buscarMascota(nombre) {
    return inventario.filter(mascota => mascota.nombre.toLowerCase().includes(nombre.toLowerCase()));
}

// Función para mostrar las mascotas disponibles en el inventario.
function mostrarInventario() {
    return inventario.map(masc => masc.nombre + ' (' + masc.tipo + ')').join(', ');
}

// Función para realizar la búsqueda con prompt y mostrar resultados con alert.
function realizarBusqueda() {
    const nombreBusqueda = prompt('Ingrese el nombre de la mascota a buscar:');
    const resultados = buscarMascota(nombreBusqueda);

    if (resultados.length > 0) {
        let mensajeResultado = 'Resultados encontrados:\n';
        resultados.forEach(masc => {
            mensajeResultado += 'ID: ' + masc.id + ', Nombre: ' + masc.nombre + ', Tipo: ' + masc.tipo + '\n';
        });
        alert(mensajeResultado);
    } else {
        alert('No se encontraron resultados. Mascotas disponibles en el inventario: ' + mostrarInventario());
    }
}

// Función para manejar las acciones del usuario.
function manejarAccionesUsuario() {
    let continuar = true;
    while (continuar) {
        const accion = prompt('¿Qué desea hacer? (buscar/agregar/eliminar/mostrar)');
    
        switch (accion.toLowerCase()) {
            case 'buscar':
                realizarBusqueda();
                break;
            case 'agregar':
                agregarMascota();
                break;
            case 'eliminar':
                eliminarMascota();
                break;
            case 'mostrar':
                alert('Mascotas en inventario: ' + mostrarInventario());
                break;
            default:
                alert('Acción no reconocida.');
                break;
        }
    
        continuar = confirm('¿Desea realizar otra acción?');
    }
    alert('Gracias por usar nuestro sistema de gestión de mascotas. ¡Hasta la próxima!');
}

// Iniciar la interacción con el usuario
manejarAccionesUsuario();
