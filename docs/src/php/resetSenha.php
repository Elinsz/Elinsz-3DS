<?php

require_once 'CLASSES/usuarios.php';
$u = new Usuarios;

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>Recuperar Senha</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">



	<link rel="stylesheet" type="text/css" href="css/main.css">

</head>
<body>
	<div class="container">
		<div class="container-login">
			<div class="wrap-login">
				<form class="login-form" method="POST" action="PHP/processa.php" id="login-form">
					<span class="login-form-title-cad">
						Elinsz 3D
					</br>
					<ul class="bemVindos">
					  <li class="margin-top-8 margin-botton-8">
						<span class="text1">
						RECUPERE SUA SENHA
						</span></a></li>
						</br>
                		<a class="text2">
						Preencha os dados solicitados para recuperar sua senha. Após enviar este formulário, você receberá um e-mail com todas as instruções.</a>
            		</ul>

					</span>
					<div class="wrap-input margin-top-35 margin-bottom-35">
						<input class="input-form" type="email" name="email"  maxlength="80" autocomplete="off">
						<span class="focus-input-form" data-placeholder="Digite um email válido"></span>
					</div>
					<div class="container-login-form-btn">
						<button class="login-form-btn" type="submit" onclick="forgotPassword()">
						Enviar Email de Recuperação
						</button>
					</div>
					<ul class="login-utils">
						<li class="margin-top-8 margin-botton-8">
						  <span class="text1">
							Voltar a página de
						  </span>
						  <a href="login.php" class="text2">
							Login?
						  </a>
					  </ul>
					</ul>
				</form>
			</div>
		</div>
	</div>
	<script>
		function forgotPassword() {
		var forgotEmail = document.getElementById('forgotEmail').value;
		window.location.href = 'skp:forgot_password@' + encodeURIComponent(JSON.stringify({ email: forgotEmail }));
		}
	</script>
</body>
</html>
