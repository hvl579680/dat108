package no.hvl.data108;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Stateless
public class DeltakerEAO {
	@PersistenceContext(name = "deltakerPU")
    private EntityManager em;
	
	public void leggTilDeltaker(Deltaker d) {
		em.persist(d);
	}
	
	public List<Deltaker> hentDeltakere() {
		List<Deltaker> listen = em.createQuery("SELECT d FROM Deltaker d").getResultList();
		return listen;
	}
	
	public boolean finnesMobilnummer(String mobilnummer) {
		Long l = (long) em.createQuery("SELECT COUNT(d) FROM Deltaker d WHERE d.mobil=:mobil").setParameter("mobil", mobilnummer).getSingleResult();
		return l >= 1 ? true : false;
	}
	
	public String hentPassord(String mobilnummer) {
		return em.find(Deltaker.class, mobilnummer).getPassord();
	}

}
