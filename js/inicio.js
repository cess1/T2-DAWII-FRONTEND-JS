/**
 * Se ejecuta cuando la pagina ha cargado completamente (DOM, CSS, Images, etc...)
 * En caso desees ejecutar el JS a penas se haya cargado el DOM, puedes usar 2 técnicas secretas:
 * -> document.addEventListener('DOMContentLoaded', {});
 * -> <script type="module" src="js/inicio.js" defer></script>
 */
window.addEventListener('load', function(){
    
    // referenciar controles del formulario
    const tipoDocumento = this.document.getElementById('tipoDocumento');
    const numeroDocumento = this.document.getElementById('numeroDocumento');
    const password = this.document.getElementById('password');
    const btnIngresar = this.document.getElementById('btnIngresar');
    const msgError = this.document.getElementById('msgError');

    // implementar listener del boton
    btnIngresar.addEventListener('click', function(){

        // validar campos del formulario
        if(tipoDocumento.value === null || tipoDocumento.value.trim() === '' || 
            numeroDocumento.value === null || numeroDocumento.value.trim() === '' || 
            password.value === null || password.value.trim() === '') {
                mostrarAlerta('Error: Debe completar correctamente sus credenciales');
                return;
        }
        ocultarAlerta();

    });

});

function mostrarAlerta(mensaje) {
    msgError.innerHTML = mensaje;
    msgError.style.display = 'block';
}

function ocultarAlerta() {
    msgError.innerHTML = '';
    msgError.style.display = 'none';
}