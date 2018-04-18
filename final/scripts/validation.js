// The JS required for Validation of Contact form would go in this file

//////////////////////////VALIDATION FOR EMAIL ON CONTACT PAGE///
$email = 'mail@example.com';
$validation = filter_var($email, FILTER_VALIDATE_EMAIL);

if ( $validation ) $output = 'proper email address';
else $output = 'wrong email address';

echo $output;

