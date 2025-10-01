<?php

if(isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['senha']) && isset($_POST['senha'])){

    require = 'PHP/conexao.php';
    require = 'CLASSES/Usuario.class.php';

    $su = new Usuario();

    $email = addslashes($_POST['email']);
    $senha = addslashes($_POST['senha']);

    if($su->login($email, $senha) == true){
        if(isset($_SESSION['idUser'])){
            header("Lacation: index.php");
        }else{
            header("Lacation: login.php");
        }

}else{
    header("Lacation: login.php");
}

?>
