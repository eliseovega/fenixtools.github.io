<?php
if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];


if( empty(trim($nombre)) ) $nombre = 'anonimo';

$body = <<<HTML
    <h2>Contacto desde www.fenix-tools.com</h2>
    <p>De: $nombre  / $email</p>
    <h3>Mensaje</h3>
    $mensaje
HTML;

$mailer = new PHPMailer();
$mailer->setFrom( $email, "$nombre" );
$mailer->addAddress('contact@fenix-tools.com','www.fenix-tools.com');
$mailer->Subject = "Solicitud : $asunto";
$mailer->msgHTML($body);
$mailer->AltBody = strip_tags($body);
$mailer->CharSet = 'UTF-8';



if($nombre != '' && $email != '' && $asunto != '' && $mensaje != ''){
    $rta = $mailer->send( ); //ENVIAR!
}

#header("Location: index.html" );