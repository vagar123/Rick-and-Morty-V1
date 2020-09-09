function cambiarNombre(idDiv){
    let mensaje = prompt("Cambia el nombre del personaje")
    document.getElementById(idDiv).innerHTML = mensaje
}
