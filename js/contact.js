function validarFormulario(){
    let textNombre = document.getElementById("nombre").value;
    let textApellido = document.getElementById("apellido").value;
    let textEdad = document.getElementById("edad").value;
    let textFecha = document.getElementById("fecha").value;
    let textEmail = document.getElementById("email").value;
    let textContraseña = document.getElementById("contrasena").value;
    
    if(textNombre == null || textNombre.length == 0){
        alert("Error: El campo nombre no puede quedar vacio")
        return false;

    } 
    
    if(textApellido == null || textApellido.length == 0){
        alert("Error: El campo apellido no puede quedar vacio")
        return false;

    } 
    
    if(textEdad == null || textEdad.length == 0){
        alert("Error: El campo edad no puede quedar vacio")
        return false;

    }else{
        if (isNaN(textEdad)){
            alert("Error el campo telefono no puede llevar letras")
            return false;
        }
    }

    if(textFecha == null || textFecha.length == 0){
        alert("Error: El campo fecha no puede quedar vacio")
        return false;

    }

    
    if(textEmail == null || textEmail.length == 0){
        alert("Error: El campo correo no puede quedar vacio")
        return false;

    }
    
    if(textContraseña == null || textContraseña.length == 0){
        alert("Error: El campo contraseña no puede quedar vacio")
        return false;

    } 
    
    else{
        alert("Gracias")
        return true;
    }
}
