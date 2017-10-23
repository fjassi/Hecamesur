<?php

if(isset($_POST['message'])){

  $name = $_POST['name'];
  $email = $_POST['email'];
  $telefono = $_POST['telefono'];
  $message = $_POST['message'];    
  // $ip = $_SERVER['REMOTE_ADDR'];
  $to      = 'hecamesur@intercom.com.ar';
  // hecamesur@intercom.com.ar
  $subject = 'Formulario de contacto de HECAMESUR';

  $message = 'Enviado por: ' . $name . "\r\n" .
              'E-Mail:     ' . $email . "\r\n" .
              'Telefono: ' . $telefono . "\r\n" . $message;

  $headers = 'From: '. $email . "\r\n" .
    'Reply-To: '. $email . "\r\n" .
    'Tel: '. $telefono . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  $status = mail($to, $subject, $message, $headers);
 

  if($status == TRUE){  
    $res['sendstatus'] = 'done';
  
    //Edit your message here
    $res['message'] = 'Mensaje envida satisfactoriamente';
    }else{
    $res['message'] = 'Fallo el envio. Por favor verifique su correo electronico.';
  }


  echo json_encode($res);
}

?>