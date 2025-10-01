<?php
	session_start();
	if(!isset($_SESSION['id_usuario']))
	{
		header("location: index.php");
		exit;
	}

?>

<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	<meta http-equiv="MSThemeCompatible" content="Yes">
	<link rel="stylesheet" href="SKUI/css/elinsz.css">
	<link rel="stylesheet" href="SKUI/css/select2.css">

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

  <!-- JQUERY -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" charset="UTF-8" ></script>

	<!--
	<link rel="stylesheet" type="text/css" media="screen" href="../css/select2-bootstrap.css"/>
	-->
	<link rel="stylesheet" href="SKUI/css/sm-core-css.css">
	<link rel="stylesheet" href="SKUI/css/sm-simple.css" />
	<!--
	<script type="text/javascript" src="../../../tools/firebug-lite/build/firebug-lite-debug.js"></script>
	-->

    </script>

	<!--
	<script type="text/javascript" src="SKUI/js/lib/LAB.js"></script>
	<script type="text/javascript" src="SKUI/js/core.js"></script>
	-->

	<title>Elinsz 3D</title>
</head>
<body>

  <div id="wrap">

    <div id="nav">

	<ul id="main-menu" class="sm sm-simple">
		<li id="attribute"><a>Atributos</a></li>
		<li id="material"><a>Materiais</a></li>
		<li id="report"><a>Listas</a></li>
		<li id="model"><a>Projeto</a></li>
		<li id="img-has-submenu" style="float:right;"><a><img src="Img/menu.png" onmouseover="this.src='Img/menu_hover.png';" onmouseout="this.src='Img/menu.png';" alt="Menu"/></a>
			<ul>
				<li id="faceattribute"><a>Atributos das faces</a></li>
				<li id="materialattribute"><a>Atributos dos materiais</a></li>
				<li id="componentlist"><a>Custos de componentes</a></li>
				<li id="exportcutlist"><a>Exportar lista de corte</a></li>
				<li id="preference"><a>Preferências</a></li>
				<!--
				<li id="checkupdate"><a>Check updates</a></li>
				-->
			</ul>
		</li>
	</ul>

    </div> <!-- #nav -->

  </div>  <!-- #wrap -->


</body>
</html>
