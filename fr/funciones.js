(function(){
    $(".boton_envio").click(function() {
 
        var nombre = $(".nombre").val();
            email = $(".email").val();
            validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            asunto = $(".asunto").val();
            mensaje = $(".mensaje").val();
 
        if (nombre == "") {
            $(".nombre").focus();
            return false;
        }else if(email == "" || !validacion_email.test(email)){
            $(".email").focus();    
            return false;
        }else if(asunto == ""){
            $(".asunto").focus();
            return false;
        }else if(mensaje == ""){
            $(".mensaje").focus();
            return false;
        }else{
            $('.ajaxgif').removeClass('hide');
            var datos = 'nombre='+ nombre + '&email=' + email + '&asunto=' + asunto + '&mensaje=' + mensaje;
            $.ajax({
                type: "POST",
                url: "phpmailer.php",
                data: datos,
                success: function() {
                    
                    $('.msg').text('Demande envoyée!');
                    //funcion de reset añadida
                    const formulario = document.getElementById('formc');
                    formulario.reset();
                
                     
                        
                         
                },
                error: function() {
                    
                    $('.msg').text('Erreur   !');                 
                }
            });
            return false;
        }
 
    });
})();
