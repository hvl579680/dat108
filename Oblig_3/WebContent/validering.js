"use strict";
let red = "rgb(255, 200, 200)";
let green = "rgb(200, 255, 200)";
let yellow = "rgb(255, 255, 170)";
let darkred = "rgb(139, 0, 0)";
let darkgreen = "rgb(50, 205, 50)";
let darkyellow = "rgb(255, 255, 25);"

let fornavnInput = document.getElementById("fornavn");
fornavnInput.addEventListener("input", validerFornavn);

let etternavnInput = document.getElementById("etternavn");
etternavnInput.addEventListener("input", validerEtternavn);

let mobilInput = document.getElementById("mobil");
mobilInput.addEventListener("input", validerMobil);

let passordInput = document.getElementById("passord");
passordInput.addEventListener("input", validerPassord);

let passordtoInput = document.getElementById("passordto");
passordtoInput.addEventListener("input", validerPassordto);

let kjonnInput = document.getElementById("kjonn");
kjonnInput.addEventListener("input", validerKjonn);

function validerFornavn() {
	let fornavn = document.getElementById("fornavn").value;
	let bokstaver = /^[A-Z\xC6\xC5\xD8][A-Za-z- \xC6\xC5\xD8\xE5\xE6\xF8]{1,19}$/;
	let feilmelding = document.getElementById("feilfornavn");
	
	if (!bokstaver.test(fornavn)) {
		feilmelding.innerHTML = "Ugyldig fornavn!";
		fornavnInput.setAttribute("style", "background-color:" + red)
		feilmelding.style.color = darkred;
	} else {
		feilmelding.innerHTML = "";
		fornavnInput.setAttribute("style", "background-color:" + green)
		feilmelding.style.color = darkgreen;
	}
}

function validerEtternavn() {
	let etternavn = document.getElementById("etternavn").value;
	let feilmelding = document.getElementById("feiletternavn");
	let bokstaver = /^[A-Z\xC6\xC5\xD8][A-Za-z-\xC6\xC5\xD8\xE5\xE6\xF8]{1,19}$/;

	if (!bokstaver.test(etternavn)) {
		feilmelding.innerHTML = "Ugyldig etternavn!";
		etternavnInput.setAttribute("style", "background-color:" + red)
		feilmelding.style.color = darkred;
	} else {
		feilmelding.innerHTML = "";
		etternavnInput.setAttribute("style", "background-color:" + green)
		feilmelding.style.color = darkgreen;
	}
}

function validerMobil() {
	let mobil = document.getElementById("mobil").value;
	let feilmelding = document.getElementById("feilmobil");
	let tall = /^[0-9]{8,8}$/;

	if (!tall.test(mobil)) {
		feilmelding.innerHTML = "Ugyldig telefonnummer!";
		mobilInput.setAttribute("style", "background-color:" + red)
		feilmelding.style.color = darkred;
	} else {
		feilmelding.innerHTML = "";
		mobilInput.setAttribute("style", "background-color:" + green)
		feilmelding.style.color = darkgreen;
	}
}

function validerPassord() {
	let passord = document.getElementById("passord").value;
	let styrke = document.getElementById("styrkePass");
	let ugyldig = document.getElementById("feilpassord");
	let svak = /^(?=.*[a-z0-9])(?=.{5,})/;
	let medium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{5,})/;
	let sterk = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

	if (sterk.test(passord)) {
		ugyldig.innerHTML = "Sterkt passord!";
		passordInput.setAttribute("style", "background-color:" + green)
		ugyldig.style.color = darkgreen;
	} else if (medium.test(passord)) {
		ugyldig.innerHTML = "Medium sterkt passord.";
		passordInput.setAttribute("style", "background-color:" + yellow)
		ugyldig.style.color = darkyellow;
	} else if (svak.test(passord)) {
		ugyldig.innerHTML = "Svakt passord!";
		passordInput.setAttribute("style", "background-color:" + red)
		ugyldig.style.color = darkred;
	} else {
		ugyldig.innerHTML = "Ugyldig passord!";
		passordInput.setAttribute("style", "background-color:" + red)
		ugyldig.style.color = darkred;
	}
}

function validerPassordto() {
	let passorden = document.getElementById("passord").value;
	let passordto = document.getElementById("passordto").value;
	let noMatch = document.getElementById("feilPassordMatch");
	
	if (passorden.localeCompare(passordto) != 0) {
		noMatch.innerHTML = "Passordene matcher ikke!"
		noMatch.style.color = darkred;
	} else {
		noMatch.innerHTML = "";
	}
}

function validerKjonn() {
	let kjonn = document.getElementById("kjonn").value;
	let feilmelding = document.getElementById("feilkjonn").value;
	let mann = "mann";
	let kvinne = "kvinne";
	
	if (mann.localeCompare(kjonn) != 0 && kvinne.localeCompare(kjonn) != 0) {
		feilmelding.innerHTML = "Du må velge kjønn";
	} else {
		feilmelding.innerHTML = "";
	}
}