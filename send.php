<?php 
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$message = $_POST['message'];

// Формирование самого письма
$title = "Uneversal";
$body = "
<h2>Hello, you are welcomed by the company Universal</h2>
<b>You have subscribed to the newsletter</b><br>
<b>You get a discount of 20%</b>
";
$myMail = "
<h2>Letter receipt report</h2>
<b>Successful email sending</b><br>
<b>email address of the recipient of the newsletter: $email</b>
";
$messageUser = "
<h2>New message from user</h2>
<b>$message</b>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'gribevgenij779@gmail.com'; // Логин на почте
    $mail->Password   = 'XW6ucafLRepMaHZ'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('gribevgenij779@gmail.com', 'Universal company'); // Адрес самой почты и имя отправителя

    // Получатель письма
    // $mail->addAddress($email);  
    $mail->addAddress('evg.grib@mail.ru'); // Ещё один, если нужен

// Отправка сообщения
if ($email != null) {
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $myMail;
} elseif ($message != null){
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $messageUser;
}

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');
