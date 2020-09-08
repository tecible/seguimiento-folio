// --------------------------------------------------------------validacion de formulario
$(document).ready(function(){

    $('#btnSend').click(function(){
  
        let errores = '';
  
        // Validado Nombre ==============================
        if( $('#names').val() == '' ){
            errores += '<p style="color: #234AFC">⦿ Escriba un nombre</p>';
            $('#names').css("border-color", "#234AFC");
        } else{
            $('#names').css("border-color", "#FFF");
        }
   
        //Validando validador=============================
        if( $('#validador').val() == '' ){
          errores += '<p style="color: #234AFC">⦿ Ingrese un nombre de validador</p>';
          $('#validador').css("border-color", "#234AFC")
        } else{
          $('#validador').css("border-color", "#FFF")
        }

        // Validando venta id
        if( $('#vta-ida').val() == '' ){
          errores += '<p style="color: #234AFC">⦿ Ingrese un ID de venta</p>';
          $('#vta-ida').css("border-color", "#234AFC")
        } else{
          $('#vta-ida').css("border-color", "#FFF")
        }
       
        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
          errores += '<p style="color: #234AFC">⦿ Ingresa un mensaje</p>';
          $('#mensaje').css("border-color", "#234AFC")
        } else{
          $('#mensaje').css("border-color", "#FFF")
        }
  
        // ENVIANDO MENSAJE ============================
        if( errores == '' == false){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                html:
                '<div>'+
                '<h3>Errores encontrados</h3>'+
                errores+
                '</div>',
                showClass: {
                    popup: 'animate__animated animate__bounceIn'
                  },
                  hideClass: {
                    popup: 'animate__animated animate__bounceOut'
                  }

              })
        }else{
          Swal.fire(
            'Listo!',
            'Mensaje enviado',
            'success'
          )
        }
    });
  
  });
  