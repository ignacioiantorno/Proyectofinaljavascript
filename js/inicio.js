function obtenerListaUsuarios(){
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if(listaUsuarios == null){
        listaUsuarios =
        [
            //id , nombre, apellido, correo,
            ['1','Ignacio', 'Iantorno', 'ignacioiantorno@gmail.com', '1234', '1994-02-08','1'],
            ['2','Agustin', 'Gonzalez', 'agusgonzalez@gmail.com', '4567', '1995-09-04','2'],
        ]
    }    
    return listaUsuarios;
}
function validarCredenciales(pCorreo, pContraseña){
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    for(var i = 0; i < listaUsuarios.length; i++){
        if(pCorreo == listaUsuarios[i][3] && pContraseña == listaUsuarios[i][4]){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1] + ' ' + listaUsuarios[i][2]);
            sessionStorage.setItem('rolUsuarioActivo', listaUsuarios[i][6]);

        }
    }

    return bAcceso;
}