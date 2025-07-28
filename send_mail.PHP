<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

error_log("POST data: " . print_r($_POST, true));
error_log("FILES data: " . print_r($_FILES, true));

require 'cors.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require_once realpath(__DIR__ . "/vendor/autoload.php");

$required_fields = ['Submission_ID', 'Paper_Title', 'Author_FUll_Name', 'Email_Address', 'Institution_Name', 'Paper_Track'];
$missing_fields = [];

foreach ($required_fields as $field) {
    if (!isset($_POST[$field]) || empty(trim($_POST[$field]))) {
        $missing_fields[] = $field;
    }
}

if (!empty($missing_fields)) {
    echo "Error: Missing required fields: " . implode(', ', $missing_fields);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->Debugoutput = function($str, $level) {
        error_log("PHPMailer Debug: $str");
    };

    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info.ictigd@gmail.com';
    $mail->Password   = 'pkml unyw xite ndox';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    $mail->setFrom('info.ictigd@gmail.com', 'Paper Submission System');
    $mail->addAddress('info.ictigd@gmail.com', 'Paper Submissions');

    $mail->addReplyTo($_POST['Email_Address'], $_POST['Author_FUll_Name']);

    $file_attached = false;
    if (isset($_FILES['Paper_File']) && $_FILES['Paper_File']['error'] == UPLOAD_ERR_OK) {
        $uploadedFile = $_FILES['Paper_File'];

        if ($uploadedFile['size'] > 10 * 1024 * 1024) {
            throw new Exception("File size too large. Maximum 10MB allowed.");
        }

        $allowed_types = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        $file_type = mime_content_type($uploadedFile['tmp_name']);

        if (!in_array($file_type, $allowed_types)) {
            throw new Exception("Invalid file type. Only PDF and Word documents are allowed.");
        }

        $mail->addAttachment($uploadedFile['tmp_name'], $uploadedFile['name']);
        $file_attached = true;
        error_log("File attached: " . $uploadedFile['name']);
    } else if (isset($_FILES['Paper_File'])) {
        error_log("File upload error: " . $_FILES['Paper_File']['error']);
    }

    $mail->isHTML(true);
    $mail->Subject = 'New Paper Submission [' . htmlspecialchars($_POST['Submission_ID']) . '] - ' . htmlspecialchars($_POST['Paper_Title']);

    $mail->Body = '
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px;">
            <h2 style="color: #0B4F8E; border-bottom: 2px solid #287B86; padding-bottom: 10px;">New Paper Submission</h2>

            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr style="background-color: #f8f9fa;">
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Submission ID:</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">' . htmlspecialchars($_POST['Submission_ID']) . '</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Paper Title:</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">' . htmlspecialchars($_POST['Paper_Title']) . '</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Author Full Name:</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">' . htmlspecialchars($_POST['Author_FUll_Name']) . '</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email Address:</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">' . htmlspecialchars($_POST['Email_Address']) . '</td>
                </tr>
                <tr style="background-color: #f8f9fa;">
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Institution Name:</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">' . htmlspecialchars($_POST['Institution_Name']) . '</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Paper Track:</td>
                    <td style="padding: 12px; border: 1px solid #ddd;">' . htmlspecialchars($_POST['Paper_Track']) . '</td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-left: 4px solid #287B86;">
                <p style="margin: 0;"><strong>File Status:</strong> ' . ($file_attached ? 'Paper file has been attached to this email.' : 'No file was uploaded or file upload failed.') . '</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                <p>This email was automatically generated from the Paper Submission System.</p>
                <p>Submission Time: ' . date('Y-m-d H:i:s') . '</p>
            </div>
        </div>
    ';

    $mail->AltBody = "New Paper Submission\n\n" .
                    "Submission ID: " . $_POST['Submission_ID'] . "\n" .
                    "Paper Title: " . $_POST['Paper_Title'] . "\n" .
                    "Author Full Name: " . $_POST['Author_FUll_Name'] . "\n" .
                    "Email Address: " . $_POST['Email_Address'] . "\n" .
                    "Institution Name: " . $_POST['Institution_Name'] . "\n" .
                    "Paper Track: " . $_POST['Paper_Track'] . "\n\n" .
                    "File Status: " . ($file_attached ? "File attached" : "No file uploaded") . "\n" .
                    "Submission Time: " . date('Y-m-d H:i:s');

    error_log("Attempting to send email...");
    $result = $mail->send();
    error_log("Email send result: " . ($result ? "SUCCESS" : "FAILED"));

    if ($result) {
        echo 'Paper submission sent successfully!';
    } else {
        echo 'Email sending failed but no exception thrown.';
    }

} catch (Exception $e) {
    error_log("PHPMailer Exception: " . $e->getMessage());
    error_log("Full error info: " . $mail->ErrorInfo);

    echo "Submission could not be sent. Error: " . $e->getMessage();
    if ($mail->ErrorInfo) {
        echo "\nMailer Info: " . $mail->ErrorInfo;
    }
}
?>