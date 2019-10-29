"use strict";

let Person = new person();

let opprettButton = document.getDocumentById("opprett");
opprettButton.addEventListener("click", event => {
	person = opprettPerson();
});

function opprettPerson() {
	
	person = new Person();
	person.fornavn = document.getElementById("fornavn").value;
	person.etternavn = document.getElementById("etternavn").value;
	person.mobilnummer = document.getElementById("mobilnummer").value;
	person.passord = document.getElementById("passord").value;
	person.passordto = document.getElementById("passordto").value;
	person.kjonn = document.getElementById("kjonn").value;
	
	if (!superValidering(person)) {
		return null;
	}
	
	return person;
}

function superValidering(person) {
	let valid = true;

	if (!person.validerFornavn(person.fornavn)) {
		valid = false;
	}
	if (!person.validerEtternavn(person.etternavn)) {
		valid = false;
	}
	if (!person.validerEtternavn(person.etternavn)) {
		valid = false;
	}
	if (!person.validerMobilnummer(person.mobilnummer)) {
		valid = false;
	}
	if (!person.validerPassord(person.passord)) {
		valid = false;
	}
	if (!person.validerPassordto(person.passordto)) {
		valid = false;
	}
	if (!person.validerKjonn(person.kjonn)) {
		valid = false;
	}
}

function visPerson() {
	document.getElementById("visfornavn").innerText = person.fornavn;
	document.getElementById("visetternavn").innerText = person.etternavn;
	document.getElementById("mobilnummer").innerText = person.mobilnummer;
	document.getElementById("kjonn").innerText = person.kjonn;
}

function validerFornavn(fornavn) {
	let valid = true;
	
	if (typeof fornavn === 'string' || fornavn instanceof String) {
		if (fornavn.length >= 2 && fornavn.length <= 20) {
			if (person[0] !== person[0].toLowerCase()) {
				//valid
			} else {
				alert("Fornavn må ha stor forbokstav.");
				valid = false;
			}
		} else {
			alert("Fornavn må være mellom 2 og 20 bokstaver");
			valid = false;
		}
	} else {
		alert("Fornavn " + fornavn + " er ikke en streng");
		valid = false;
	}
	return valid;
}

function validerEtternavn(etternavn) {
	let valid = true;
	let space = " ";
	
	if (typeof etternavn === 'string' || etternavn instanceof String) {
		if (etternavn.length >= 2 && etternavn.length <= 20) {
			if (person[0] !== person[0].toLowerCase()) {
				//valid
				if (!space.match(etternavn)) {
					
				} else {
					alert("Kan ikke ha mellomrom i etternavn.")
					valid = false;
				}
			} else {
				alert("Etternavn må ha stor forbokstav.");
				valid = false;
			}
		} else {
			alert("Etternavn må være mellom 2 og 20 bokstaver");
			valid = false;
		}
	} else {
		alert("Etternavn " + etternavn + " er ikke en streng");
		valid = false;
	}
	return valid;
}

function validerMobilnummer(mobilnummer) {
	let valid = true;
	let numbers = /^[o-9]+$/;
	if (!mobilnummer.value.match(numbers)) {
		alert("Mobilnummer kan kun inneholde tall");
		valid = false;
	} else {
		if (mobilnummer.length != 8) {
			alert("Mobilnummeret må være 8 tall.");
			valid = false;
		}
	}
	return valid;
}

function validerPassord(passord) {
	let valid = true;
	let myInput = document.getElementById("passord");
	let letter = document.getElementById("letter");
	let capital = document.getElementById("capital");
	let number = document.getElementById("number");
	let length = document.getElementById("length");

	// When the user clicks on the password field, show the message box
	myInput.onfocus = function() {
	  document.getElementById("message").style.display = "block";
	}

	// When the user clicks outside of the password field, hide the message box
	myInput.onblur = function() {
	  document.getElementById("message").style.display = "none";
	}

	// When the user starts to type something inside the password field
	myInput.onkeyup = function() {
	  // Validate lowercase letters
	  let lowerCaseLetters = /[a-z]/g;
	  if(myInput.value.match(lowerCaseLetters)) {
	    //valid
	  } else {
	    alert("Passord må inneholde minst en liten bokstav.");
	    valid = false;
	}

	  // Validate capital letters
	  let upperCaseLetters = /[A-Z]/g;
	  if(myInput.value.match(upperCaseLetters)) {
	    //valid
	  } else {
	    alert("Passord må inneholde minst en stor bokstav.")
	    valid = false;
	  }

	  // Validate numbers
	  let numbers = /[0-9]/g;
	  if(myInput.value.match(numbers)) {
	    //valid
	  } else {
	    alert("Passord må inenholde minst et tall.");
	    valid = false;
	  }

	  // Validate length
	  if(myInput.value.length >= 8) {
	    //valid
	  } else {
	    alert("Passord må være minst 8 bokstaver.");
	    valid = false;
	  }
	  
	  //red/yellow/green color according to length
	  let span = document.getElementById("errorSpan");
	  if (password.length >= 12) {
		  span.style.color = "green";
	  } else if (password.length >= 6) {
		  span.style.color = "yellow";
	  } else {
		  span.style.color = "red";
	  }
	}
	
	function validerPassordto(passordto){
		let valid = true;
		if(!person.passord.equals(passordto)){
			valid = false;
		}
		return valid;
	}

	function validerKjonn(kjonn){
		let valid = true;
		if(kjonn === null){
			alert("Du må velge et kjønn");
			valid = false;
		}
		return valid;
	}
}