<?php
//Llamando a los input
$nombre = $_POST['nombre'];
$validador = $_POST['validador'];
$vtaID = $_POST['vtaID'];
$mensaje = $_POST['mensaje'];

//datos correo
$destinatario = "soporte.tecnico@ible.mx";
$asunto = "Seguimiento folios";

$carta = "De: $nombre \n";
$carta .= "Telefono: $validador \n";
$carta .= "ID: $vtaID \n";
$carta .= "Mensaje: $mensaje";

//Enviando mensaje
mail($destinatario, $asunto, $carta);
header('Location: index.html');

?>
