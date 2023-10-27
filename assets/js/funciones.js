function cambiarBorderFoto(){

    let border = document.getElementById("foto").style.border;
    
    if (border == '2px solid red'){
        document.getElementById("foto").style.border = 'none';
    } else {
        document.getElementById("foto").style.border = '2px solid';
        document.getElementById("foto").style.borderColor = 'red';      
    }

}

function verificarTicket(){
    
    ticket1 = document.getElementById("id_ticket1").value;
    ticket2 = document.getElementById("id_ticket2").value;
    ticket3 = document.getElementById("id_ticket3").value;

    total = parseInt(ticket1) + parseInt(ticket2) + parseInt(ticket3);

    if (total <= 10)
        document.getElementById("mensajes").innerHTML = "llevas "+total+" stickers";
    else
        document.getElementById("mensajes").innerHTML = "Llevas demasiados stickers";
    

}

function validarPass(){

    clave1 = document.getElementById("select1").value;
    clave2 = document.getElementById("select2").value;
    clave3 = document.getElementById("select3").value;

    if (clave1 == 9 && clave2 == 1 && clave3 == 1)
        document.getElementById("mensajes").innerHTML = 'Password 1 es Correcto';
    else if (clave1 == 7 && clave2 == 1 && clave3 == 4)
        document.getElementById("mensajes").innerHTML = 'Password 2 es Correcto';
    else
        document.getElementById("mensajes").innerHTML = 'Password Incorrecto';
    
}