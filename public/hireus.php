<?php 

    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Headers: Content-Type"); 
    header("Content-Type: application/json"); 
    $rest_json = file_get_contents("php://input");

    $_POST = json_decode($rest_json, true); 
    $errors = array(); 

    if ($_SERVER['REQUEST_METHOD'] === "POST") { 
        if (empty($_POST['work_email'])) {
            $errors[] = 'Email is empty';
            
        } else { 
            //$email = $_POST['email'];
            $first_name = $_POST["first_name"];
            $last_name = $_POST["last_name"];
            $company_name = $_POST["company_name"];
            $email = $_POST["work_email"];
            $phone_number = $_POST["phone_number"];
            $country = $_POST["country"];
            $no_of_employees = $_POST["no_of_employees"]; 
            $role = $_POST["role"];
 

            
            // validating the email 
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
                $errors[] = 'Invalid email'; 
            } 
                
        }

        if (empty($_POST['phone_number'])) {
            
            $errors[] = 'Phone Number is empty';
        } else {
            $message = $_POST['phone_number']; 
                
        } 
        
        if (empty($errors)) {
                    
            $date = date('j, F Y h:i A'); 
            $emailBody = " <html> 
                                <head> 
                                    <title>
                                        $email is contacting you
                                    </title>
                                </head> 
                                <body style=\"background-color:#fafafa;\"> 
                                    <div style=\"padding:20px;\"> 
                                        Date: <span style=\"color:#888\">$date</span> 
                                        <br> FullName: <span style=\"color:#888\">$first_name</span>
                                                       <span style=\"color:#888\">$last_name</span>
                                        <br> Company Name: <span style=\"color:#888\">$company_name</span>
                                        <br> Email: <span style=\"color:#888\">$email</span>  
                                        <br> Tel: <span style=\"color:#888\">$phone_number</span>
                                        <br> Country: <span style=\"color:#888\">$country</span>
                                        <br> No Of Employees <span style=\"color:#888\">$no_of_employees</span>  
                                        <br> Role: <div style=\"color:#888\">$role</div> 
                                    </div> 
                                </body> 
                            </html>"; 
            $headers = 	'From: Contact Form <info@repotecc.com>' . "\r\n" . 
                        "Reply-To: $email" . "\r\n" . 
                        "MIME-Version: 1.0\r\n" . 
                        "Content-Type: text/html; charset=iso-8859-1\r\n";
                        
            $to = 'info@repotecc.com'; 
            $subject = 'Hire Us'; 
                
            if (mail(
                $to, $subject, $emailBody, $headers)) { 
                    $sent = true;
            } 
                
        } 
    }
    
    ?> 



<?php if (!empty($errors)) : ?> 
{ 
    "status": "fail",
        "error": <?php echo json_encode($errors) ?> 
} 
    
<?php endif; ?> 
<?php 
    if (isset($sent) && $sent === true) : ?> {
         "status": "success",
          "message": "Your data was successfully submitted" 
    }
    <?php endif; ?>
