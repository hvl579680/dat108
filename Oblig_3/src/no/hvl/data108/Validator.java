package no.hvl.data108;

import javax.ejb.EJB;

public class Validator {
		
	public boolean isFornavnValid(String fornavn) {
		
		if(!fornavn.matches("^[A-Z���][A-Za-z ������-]{1,20}")) {
			return false;
		}
		else {
			return true;
		}
	}
	
	public boolean isEtternavnGyldig(String etternavn) {
		if(!etternavn.matches("^[A-Z���][A-Za-z������-]{1,20}")) {
			return false;
		}
		else {
			return true;
		}
	}
	
	public boolean isMobilGyldig(String mobil) {
		if(mobil == null || mobil.isEmpty()) {
			return false;
		}
		else if (!mobil.matches("^[0-9]{8}")) {
			return false;
		}
		else {
			return true;
		}
	}
	
	public boolean isKjonnGyldig(String kjonn) {
		return kjonn != null;
	}
	
	public boolean isPassordGyldig(String pass1, String pass2) {
		return pass1 != null && pass1.equals(pass2) && pass1.length() > 4;
	}
	

}