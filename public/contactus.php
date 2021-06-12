<?php 

    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Headers: Content-Type"); 
    header("Content-Type: application/json"); 
    $rest_json = file_get_contents("php://input");

    $_POST = json_decode($rest_json, true); 
    $errors = array(); 

    if ($_SERVER['REQUEST_METHOD'] === "POST") { 
        if (empty($_POST['contact_email'])) {
            $errors[] = 'Email is empty';
            
        } else { 
            //$email = $_POST['email'];
            $first_name = $_POST["contact_fname"];
            $last_name = $_POST["contact_lname"];
            $contact_phone = $_POST["contact_phone"];
            $email = $_POST["contact_email"];
            $contact_title = $_POST["contact_title"];
            $contact_message = $_POST["contact_message"];
            
            // validating the email 
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
                $errors[] = 'Invalid email'; 
            } 
                
        }

        if (empty($_POST['contact_message'])) {
            
            $errors[] = 'Message is empty';
        } else {
            $message = $_POST['contact_message']; 
                
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
                                        <br> Email: <span style=\"color:#888\">$email</span>  
                                        <br> Contact Phone: <span style=\"color:#888\">$contact_phone</span>
                                        <br> Message Title: <span style=\"color:#888\">$contact_title</span>
                                        <br> Message <span style=\"color:#888\">$contact_message</span>  
                                        
                                    </div> 
                                </body> 
                            </html>"; 
            $headers = 	'From: Contact Form <info@repotecc.com>' . "\r\n" . 
                        "Reply-To: $email" . "\r\n" . 
                        "MIME-Version: 1.0\r\n" . 
                        "Content-Type: text/html; charset=iso-8859-1\r\n";
                        
            $to = 'info@repotecc.com'; 
            $subject = 'Contact Us'; 
                
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
