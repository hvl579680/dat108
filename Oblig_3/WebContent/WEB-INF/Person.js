"use strict";

class Person {
	constructor(fornavn = "", etternavn = "", mobilnummer = "", passord = "", passord2 = "", kjonn = "") {
		this._fornavn = fornavn;
		this._etternavn = etternavn;
		this._mobilnummer = mobilnummer;
		this._passord = passord;
		this._passordto = passordto;
		this.kjonn = kjonn;
	}
	
	fromJson(json) {
		let object = JSON.parse (json);
		this._fornavn = fornavn;
		this._etternavn = etternavn;
		this._mobilnummer = mobilnummer;
		this._passord = passord;
		this._passordto = passordto;
		this.kjonn = kjonn;
	}
	
	toJson() {
		return ("{" +
				"\"fornavn\";\"" + this.fornavn + "\"," +
				"\"etternavn\";\"" + this.etternavn + "\"," +
				"\"mobilnummer\";\"" + this.mobilnummer + "\"," +
				"\"passord\";\"" + this.passord + "\"," +
				"\"passordto\";\"" + this.passordto + "\"," +
				"\"kjonn\";\"" + this.kjonn + "\"," +
				"}");
	}
	
	get fornavn() {
		return this._fornavn;
	}
	
	set fornavn(fornavn) {
		this._fornavn = fornavn;
	}
	
	get etternavn() {
		return this._etternavn;
	}
	
	set etternavn(etternavn) {
		this._etternavn = etternavn;
	}
	
	get mobilnummer() {
		return this._mobilnummer;
	}
	
	set mobilnummer(mobilnummer) {
		this._etternavn = etternavn;
	}
	
	get passord() {
		return this._passord;
	}
	
	set passord(passord) {
		this._passord = passord;
	}
	
	get passordto() {
		return this._passordto;
	}
	
	set passordto(passordto) {
		this._passordto = passordto;
	}
	
	get kjonn() {
		return this._kjonn;
	}
	
	set kjonn(kjonn) {
		this._kjonn = kjonn;
	}
	
}