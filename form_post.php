<?php 
if ($_POST['contactFormSubmit']) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $find_us = $_POST['find_us'];
    $newsletter = $_POST['newsletter'];
	
	// Send email to admin

    $to     = 'info@greatlakesmultimedia.com';
    $subject= 'Contact Request Submitted from GreatLakesMultimedia.com';

	$message = '
		<html>
		<head>
			<title>Contact Request Submitted from GreatLakesMultimedia.com</title>
		</head>
		<body>
			<h1>Information Submitted in Form</h1>
			<table cellspacing="0" style="border: 2px dashed #9A9A9A;; width: 300px; height: 200px;">
				<tr>
            <th>Name:</th><td>'.$name.'</td>
			</tr>
			<tr style="background-color: #e0e0e0;">
				<th>Email:</th><td>'.$email.'</td>
			</tr>
			<tr>
				<th>Find us:</th><td>'.$find_us.'</td>
			</tr>
			<tr>
				<th>Newsletter:</th><td>'.$newsletter.'</td>
			</tr>
					<tr>
				<th>Message:</th><td>'.$message.'</td>
			</tr>
				</table>
		</body>
		</html>';

	// Set content-type header for sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// Additional headers
    $headers .= 'From: GreatLakesMultimedia <info@greatlakesmultimedia.com>' . "\r\n";

	$headers = 'Reply-To: '.$name.' '. $email .'' . "\r\n" .

		
    mail($to, $subject, $message, $headers);
    echo json_encode(array('result'=>"ok"));  
} else {
    echo json_encode(array('result'=>"fail")); 
}
?>