<?php 

ini_set("include_path", '/home2/kennysu1/php:' . ini_get("include_path") );

error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED ^ E_STRICT);

        
require_once "Mail.php";

$host = "ssl://mail.repotecc.com";
$username = "admin@repotecc.com";
$password = "admin1953.";
$port = "465";


$contact_fname = $_POST["contact_fname"];
$contact_lname = $_POST["contact_lname"];
$contact_email = $_POST["contact_email"];
$contact_phone = $_POST["contact_phone"];
$contact_title = $_POST["contact_title"];
$contact_message = $_POST["contact_message"];
$to = "info@repotecc.com"; 



$email_from = $contact_email;
$email_subject = "Contact us" ;
$email_body = "First Name: ".$contact_fname."
\n Last Name: ".$contact_lname."\n Contact Email: ".$contact_email."\n
Contact Phone: ".$contact_phone."\n Contact Title: ".$contact_title."
\n Contact Message: ".$contact_message."";


$email_address = "ayomide@repotecc.com";

$headers = array ('From' => $email_from, 'To' => $to, 'Subject' => $email_subject, 'Reply-To' => $email_address);
$smtp = Mail::factory('smtp', array ('host' => $host, 'port' => $port, 'auth' => true, 'username' => $username, 'password' => $password));
$mail = $smtp->send($to, $headers, $email_body);


if (PEAR::isError($mail)) {
echo("<p>" . $mail->getMessage() . "</p>");

} else {
    echo "<script>alert('Form Successfully Submitted');
        location.href = 'https://repotecc.com';
    </script>";

}


