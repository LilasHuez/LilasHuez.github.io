<?php include 'header.php' ?>
<!DOCTYPE html>
<html lang="en">

<body>
<h1 class="projets">Convertisseur de Simflouz en Euros</h1>


<form action="#" method="POST">

    <div>Montant en §: <input type="number" name="amount" id=""> <input type="submit" name="submit"></div>

</form>


<?php
function getAmountInEuros()
{
    return $_POST ['amount'] * 161.62;
}

if (isset($_POST ['amount'])) {
    echo getAmountInEuros() . ' €. ';
}


include 'footer.php'
?>