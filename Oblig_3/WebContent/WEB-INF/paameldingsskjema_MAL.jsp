<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<!-- Fra https://purecss.io/ -->
<link rel="stylesheet"
	href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
	<script src="validering.js" defer></script>
<title>Påmelding</title>
</head>
<body>
	<h2>Påmelding</h2>
	<form method="post" class="pure-form pure-form-aligned">
		<fieldset>
			<div class="pure-control-group">
				<label for="fornavn">Fornavn:</label> <input type="text"
					id="fornavn" name="fornavn" value=""/> 
					<font id="feilfornavn" color="black">Fyll inn fornavn.</font>
			</div>
			<div class="pure-control-group">
				<label for="etternavn">Etternavn:</label> <input type="text"
					id="etternavn" name="etternavn" value=""/> 
					<font id="feiletternavn" color="black">Fyll inn etternavn.</font>
			</div>
			<div class="pure-control-group">
				<label for="mobil">Mobil (8 siffer):</label> <input type="text"
					id="mobil" name="mobil" value=""/> 
					<font id="feilmobil" color="black">Fyll inn mobilnummer.</font>
			</div>
			<div class="pure-control-group">
				<label for="password">Passord:</label> <input type="password"
					id="passord" name="passord" value=""/> 
					<font id="feilpassord" color="black">Fyll inn passord</font>
			</div>
			<div class="pure-control-group">
				<label for="passordto">Passord repetert:</label> <input
					type="password" id="passordto" name="passordRepetert"
					value=""/> 
					<font id="feilPassordMatch" color="black">Repeter passord.</font>
			</div>
			<div class="pure-control-group">
				<label id="kjonn" for="kjonn">Kjønn:</label> <input type="radio" name="kjonn"
					value="mann"
					 />mann
				<input type="radio" name="kjonn" value="kvinne"
					 />kvinne
				<font id="feilkjonn" color="black">Du må oppgi kjønn</font>
			</div>
			<div class="pure-controls">
				<button id = "opprett" type="submit" class="pure-button pure-button-primary">Meld
					meg på</button>
			</div>
			<div class="pure-control-group">
			<span id="errorSpan" style="color:red;"></span>
			</div>
		</fieldset>
	</form>
</body>
</html>