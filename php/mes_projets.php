<?php include 'header.php' ?>
<!DOCTYPE html>
<html lang="en">

<body>
    <h1 class="projets">Convertisseur de Simflouz en Euros</h1>
    
   <?php 
    function getAmountInEuros($amount)
{
    $conversionRate = 161.62;
    
    $amountInEuros = $amount * $conversionRate;
    // var_dump($amountInDollars);

    // echo $amountInSimoleons . ' § ';
    
    return $amountInEuros;
}
 ?> 

<form action="" method="POST">

        <div>Montant en §: <input type="number" name="amount" id=""> <input type="submit" name="submit" ></div> 
        <div>Montant en €: <output type= "number" name="result" id=""></div>
        
    </form>

 <?php
if (isset($_POST ['amount'])) {
    $amount = $_POST['amount'];
}
echo $amount . ' §. <br>';
echo getAmountInEuros($amount). ' €. ';

?> 




<?php include 'footer.php' ?> 

