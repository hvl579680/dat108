package no.hvl.data108;

import static no.hvl.data108.UrlKart.LOGIN_URL;
import static no.hvl.data108.UrlKart.LISTE_URL;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet(name = "LogginnServlet", urlPatterns = "/LogginnServlet")
//@WebServlet("/" + LOGIN_URL)
public class LogginnServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String loginMessage = "";

		if (request.getParameter("requiresLogin") != null) {
			loginMessage = "Forespørselen din krever pålogging. " + "(Du kan ha blitt logget ut automatisk)";

		} else if (request.getParameter("invalidUsername") != null) {
			loginMessage = "Manglende eller ugyldig brukernavn";
		}

		request.setAttribute("loginMessage", loginMessage);

		request.getRequestDispatcher("WEB-INF/logginn_MAL.jsp").forward(request, response);
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		String username = request.getParameter("mobil");
		String password = request.getParameter("passord");

		
			response.sendRedirect(LISTE_URL);
		
	}
}