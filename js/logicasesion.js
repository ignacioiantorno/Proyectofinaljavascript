document.querySelector('#btnIngresar').addEventListener('click',
iniciarSesion);


function iniciarSesion(){
    var sCorreo = '';
    var sContraseña = '';
    var bAcceso = false;

    sCorreo = document.querySelector('#txtCorreo').value;
    sContraseña = document.querySelector('#txtContraseña').value;

    bAcceso = validarCredenciales(sCorreo, sContraseña);

    if(bAcceso == true) {
        ingresar();
    }
}


function ingresar(){
    var rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case '1':
            window.location.href = 'admin.html';
        break;
        case '2':
            window.location.href = 'admin.html';
        break;
        default:
            window.location.href = 'index.html'
        break;
    }
}