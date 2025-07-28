<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Allow CORS if needed
require 'cors.php';

// Load PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require_once realpath(__DIR__ . "/vendor/autoload.php");

// Validate required fields
$required_fields = ['firstname',   'email', 'number', 'message'];
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
    // SMTP configuration
    $mail->SMTPDebug = SMTP::DEBUG_OFF;
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info.ictigd@gmail.com';
    $mail->Password   = 'pkml unyw xite ndox'; // App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Email setup to admin
    $mail->setFrom('info.ictigd@gmail.com', 'ICTIGD Enquiry');
    $mail->addAddress('info.ictigd@gmail.com', 'ICTIGD Enquiry');
    $mail->addReplyTo($_POST['email'], $_POST['firstname']    );
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';

    $mail->Body = '
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px;">
            <h2 style="color: #0B4F8E; border-bottom: 2px solid #287B86; padding-bottom: 10px;">New Enquiry</h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 15px;">
                <tr>
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6; font-weight: 600;">Name</td>
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6;">' .
                        htmlspecialchars($_POST['firstname']) .  '</td>
                </tr>
                <tr style="background-color: #f0f4f7;">
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6; font-weight: 600;">Phone Number</td>
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6;">' .
                        htmlspecialchars($_POST['number']) . '</td>
                </tr>
                <tr>
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6; font-weight: 600;">Email</td>
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6;">' .
                        htmlspecialchars($_POST['email']) . '</td>
                </tr>
                <tr style="background-color: #f0f4f7;">
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6; font-weight: 600;">Message</td>
                    <td style="padding: 12px 15px; border: 1px solid #dee2e6;">' .
                        nl2br(htmlspecialchars($_POST['message'])) . '</td>
                </tr>
            </table>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
                <p>Submitted at: ' . date('Y-m-d H:i:s') . '</p>
            </div>
        </div>
    ';

    $mail->AltBody = "Enquiry\n\n" .
        "Name: " . $_POST['firstname'] .  "\n" .
        "Email: " . $_POST['email'] . "\n" .
        "Phone: " . $_POST['number'] . "\n" .
        "Message: " . $_POST['message'];

    // Send mail to admin
    $mail->send();

    // Auto-reply to user
    $replyMail = new PHPMailer(true);
    $replyMail->isSMTP();
    $replyMail->Host       = 'smtp.gmail.com';
    $replyMail->SMTPAuth   = true;
    $replyMail->Username   = 'info.ictigd@gmail.com';
    $replyMail->Password   = 'pkml unyw xite ndox';
    $replyMail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $replyMail->Port       = 587;

    $replyMail->setFrom('info.ictigd@gmail.com', 'ICTIGD Team');
    $replyMail->addAddress($_POST['email'], $_POST['firstname']);
    $replyMail->isHTML(true);
    $replyMail->Subject = 'Thank you for your enquiry - ICTIGD 2025';

    $replyMail->Body = '
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h3 style="color: #287B86;">Dear ' . htmlspecialchars($_POST['firstname']) . ',</h3>
            <p>Thank you for contacting us. We have received your message and our team will get back to you shortly.</p>
            <p><strong>Your Submission Summary:</strong></p>
            <ul>
                <li><strong>Name:</strong> ' . htmlspecialchars($_POST['firstname']) .  '</li>
                <li><strong>Email:</strong> ' . htmlspecialchars($_POST['email']) . '</li>
                <li><strong>Phone:</strong> ' . htmlspecialchars($_POST['number']) . '</li>
                <li><strong>Message:</strong> ' . nl2br(htmlspecialchars($_POST['message'])) . '</li>
            </ul>
            <p>Warm regards,<br>ICTIGD 2025 Team</p>
        </div>
    ';

    $replyMail->AltBody = "Thank you " . $_POST['firstname'] . " for contacting us.\n\nWe have received your enquiry and will get back to you soon.\n\n- ICTIGD 2025 Team";

    $replyMail->send();

    echo 'sent successfully!';
} catch (Exception $e) {
    echo "Submission could not be sent. Error: " . $e->getMessage();
}
