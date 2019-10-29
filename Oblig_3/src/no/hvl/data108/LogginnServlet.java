package no.hvl.data108;

import static no.hvl.data108.UrlKart.LOGIN_URL;
import static no.hvl.data108.UrlKart.SKJEMA_URL;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet(name="LogginnServlet", urlPatterns="/LogginnServlet")
//@WebServlet("/" + LOGIN_URL)
public class LogginnServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	

	
	    @Override
	    protected void doGet(HttpServletRequest request,
	            HttpServletResponse response) throws ServletException, IOException {

	        String loginMessage = "";
	        
	        if (request.getParameter("requiresLogin") != null) {
	        	loginMessage = "Foresp�rselen din krever p�logging. " 
	        			+ "(Du kan ha blitt logget ut automatisk)";
	        	
	        } else if (request.getParameter("invalidUsername") != null) {
	        	loginMessage = "Manglende eller ugyldig brukernavn"; 
	        }

	        request.setAttribute("loginMessage", loginMessage);
	        
	        request.getRequestDispatcher("WEB-INF/logginn_MAL.jsp")
	        		.forward(request, response);
	    }

	    @Override
	    protected void doPost(HttpServletRequest request,
	            HttpServletResponse response) throws ServletException, IOException {
	    	
	    	//hente brukernavn og passord fra database
	    	//if/else rett brukernavn/passord/om det finnes
	    	
	        String username = request.getParameter("mobil");
	        String password = request.getParameter("passord");

	        if (username == null || !Validering.isValidUsername(username)) {
	            response.sendRedirect(LOGIN_URL + "?invalidUsername");
	        } else {

	            HttpSession sesjon = request.getSession(false);
	            if (sesjon != null) {
	                sesjon.invalidate();
	            }
	            sesjon = request.getSession(true);
	            sesjon.setMaxInactiveInterval(1000);

	            sesjon.setAttribute("username", username);

	            response.sendRedirect(SKJEMA_URL);
	        }
	}

}