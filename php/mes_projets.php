<?php include 'header.php' ?>
<!DOCTYPE html>
<html lang="en">

<head>

    <title>MES PROJETS</title>
</head>

<body>
    <h1>Convertisseur de Simflouz en Euros</h1>
    
   <?php 
    function getAmountInSimoleons($amount)
{
    $conversionRate = 0.0061873531;
    
    $amountInSimoleons = $amount * $conversionRate;
    // var_dump($amountInDollars);

    // echo $amountInSimoleons . ' § ';
    
    return $amountInSimoleons;
}

$simoleons = getAmountInSimoleons(42);

echo $simoleons . "§" . "<hr>";

$simoleons = getAmountInSimoleons(123);

echo $simoleons . "§" . "<hr>";

$simoleons = getAmountInSimoleons(161.62);

echo $simoleons . "§" . "<hr>";

$numberToConvert = filter_input(INPUT_GET, 'number', FILTER_VALIDATE_INT);

if (isset($_GET['number']))
{
    $amountFromUrl = $_GET['number'];
}
$simoleons = getAmountInSimoleons($numberToConvert);

echo $simoleons . "§" . "<hr>";
// ?> 
<form action="traiteFormulaire.php" method="GET">

        <div>Montant en §: <input type="number" name="amount" id=""> <input type="submit" name="submit" ></div> 
        <div>Montant en €: <output type= "number" name="result" id=""></div>
        
    </form>

<?php
    if (isset ($_GET ['submit'])) {

        $amountFromForm = $_GET['number'];
    }
    $si = getAmountInSimoleons($numberToConvert);
    
    echo $simoleons . "§" . "<hr>";


?>




 <?php include 'footer.php' ?>

