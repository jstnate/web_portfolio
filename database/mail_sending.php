<?php 

$mail -> isSMTP();
$mail -> Host = 'localhost';
$mail -> Port = '1025';

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$visitor_mail = $_POST['mail'];
$visitor_message = $_POST['message'];

$to = "lefetey.nathan@gmail.com";
$email_subject = "Contact from portfolio";
$email_body = $visitor_message;
$email_from = $visitor_mail;
$headers = "From: $email_from";

mail($to, $email_subject, $first_name, $last_name, $email_body, $headers);

header('Location: test.php');

?>