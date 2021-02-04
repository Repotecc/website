<?php 
ini_set("include_path", '/home2/kennysu1/php:' . ini_get("include_path") );

error_reporting(E_ALL ^ E_NOTICE ^ E_DEPRECATED ^ E_STRICT);

        
require_once "Mail.php";

$host = "ssl://mail.repotecc.com";
$username = "admin@repotecc.com";
$password = "admin1953.";
$port = "465";


$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$company_name = $_POST["company_name"];
$work_email = $_POST["work_email"];
$phone_number = $_POST["phone_number"];
$country = $_POST["country"];
$no_of_employees = $_POST["no_of_employees"]; 
$role = $_POST["role"];
$to = "info@repotecc.com"; 


$email_from = $work_email;
$email_subject = "hire us" ;
$email_body = "First Name: ".$first_name."
\n Last Name: ".$last_name."\n Company Name: ".$company_name."\n
Work Email: ".$work_email."\n Phone Number: ".$phone_number."
\n Country: ".$country."\n No of Employees: ".$no_of_employees."\n
role: ".$role."";


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
// header("location: https://repotecc.com");
}


