function enviarMsje() {
	//rescatar elementos
	var ultimoMsje = document.getElementsByClassName("w-last-message")[0];
	var inputMsje = document.getElementById("mensajes").value;
	var chatMsjes = document.getElementById("chat");
	//crear elementos
	var crearDiv1 = document.createElement("div");
	var crearDiv2 = document.createElement("div");
	var crearParrafoMsje = document.createElement("p");
	var crearDivHora = document.createElement("div");
	var nodoMsje = document.createTextNode(inputMsje);
	var nodoHora = document.createTextNode("14:35");
	//hijos
	chatMsjes.appendChild(crearDiv1);
	crearDiv1.appendChild(crearDiv2);
	crearDiv2.appendChild(crearParrafoMsje);
	crearParrafoMsje.appendChild(nodoMsje);
	crearDiv2.appendChild(crearDivHora);
	crearDivHora.appendChild(nodoHora);
	//atributos
	crearDiv1.setAttribute("class", "w-message w-message-out");
	crearDiv2.setAttribute("class", "w-message-text")
	crearDivHora.setAttribute("class", "time");
	//otros
	document.getElementById("mensaje").innerHTML = inputMsje;
}
function seleccionarChatRaymi() {
	//rescatar elementos
	var fotoRaymi = document.getElementsByClassName("wh-44")[1].value;
	var nodoFotoRaymi = document.createTextNode(fotoRaymi);
	var avatarChat = document.getElementsByClassName("avatar")[12];
	var fotoChat = avatarChat.getElementsByTagName("img")[0];
	fotoChat.innerHTML = "";
	fotoChat.appendChild(nodoFotoRaymi);

	var nombreRaymi = document.getElementsByClassName("w-contact-name")[1].value;
	var nodoNombreRaymi = document.createTextNode(nombreRaymi);
	var nombreChat = avatarChat.getElementsByTagName("h4")[0];
	nombreChat.innerHTML = "";
	nombreChat.appendChild(nodoNombreRaymi);

	var nodoHoraUltimaConexion = document.createTextNode("Última conexión a las 12:03");
	var ultimaConexion = avatarChat.getElementsByTagName("ul")[0];
	ultimaConexion.innerHTML = "";
	ultimaConexion.appendChild(nodoHoraUltimaConexion);

	var chatMsjes = document.getElementById("chat");
	var crearDiv1 = document.createElement("div");
	chatMsjes.innerHTML = "";
	chatMsjes.appendChild(crearDiv1);

	var crearDiv2 = document.createElement("div");
	var crearParrafoMsje = document.createElement("p");
	var crearDivHora = document.createElement("div");
	var ultimoMsjeRaymi = document.getElementsByClassName("w-last-message")[1].value;
	var nodoUltimoMsjeRaymi = document.createTextNode(ultimoMsjeRaymi);
	var horaUltimoMsjeRaymi = document.getElementsByClassName("time")[1].value;
	var nodoHora = document.createTextNode(horaUltimoMsjeRaymi); 

	crearDiv1.appendChild(crearDiv2);
	crearDiv2.appendChild(crearParrafoMsje);
	crearParrafoMsje.appendChild(nodoUltimoMsjeRaymi);
	crearDiv2.appendChild(crearDivHora);
	crearDivHora.appendChild(nodoHora);

	//atributos
	crearDiv1.setAttribute("class", "w-message w-message-in");
	crearDiv2.setAttribute("class", "w-message-text")
	crearDivHora.setAttribute("class", "time");
	//otros
}

function seleccionarChatMariana() {
	//rescatar elementos
	var fotoMariana = document.getElementsByClassName("wh-44")[2].value;
	var nodoFotoMariana = document.createTextNode(fotoMariana);
	var avatarChat = document.getElementsByClassName("avatar")[12];
	var fotoChat = avatarChat.getElementsByTagName("img")[0];
	fotoChat.innerHTML = "";
	fotoChat.appendChild(nodoFotoMariana);

	var nombreMariana = document.getElementsByClassName("w-contact-name")[2].value;
	var nodoNombreMariana = document.createTextNode(nombreMariana);
	var nombreChat = avatarChat.getElementsByTagName("h4")[0];
	nombreChat.innerHTML = "";
	nombreChat.appendChild(nodoNombreMariana);

	var nodoHoraUltimaConexion = document.createTextNode("Última conexión a las 10:23");
	var ultimaConexion = avatarChat.getElementsByTagName("ul")[0];
	ultimaConexion.innerHTML = "";
	ultimaConexion.appendChild(nodoHoraUltimaConexion);

	var chatMsjes = document.getElementById("chat");
	var crearDiv1 = document.createElement("div");
	chatMsjes.innerHTML = "";
	chatMsjes.appendChild(crearDiv1);

	var crearDiv2 = document.createElement("div");
	var crearParrafoMsje = document.createElement("p");
	var crearDivHora = document.createElement("div");
	var ultimoMsjeMariana = document.getElementsByClassName("w-last-message")[2].value;
	var nodoUltimoMsjeMariana = document.createTextNode(ultimoMsjeMariana);
	var horaUltimoMsjeMariana = document.getElementsByClassName("time")[2].value;
	var nodoHora = document.createTextNode(horaUltimoMsjeMariana); 

	crearDiv1.appendChild(crearDiv2);
	crearDiv2.appendChild(crearParrafoMsje);
	crearParrafoMsje.appendChild(nodoUltimoMsjeMariana);
	crearDiv2.appendChild(crearDivHora);
	crearDivHora.appendChild(nodoHora);

	//atributos
	crearDiv1.setAttribute("class", "w-message w-message-in");
	crearDiv2.setAttribute("class", "w-message-text")
	crearDivHora.setAttribute("class", "time");
	//otros
}

function seleccionarChatAnaMaria() {
	//rescatar elementos
	var fotoAnaMaria = document.getElementsByClassName("wh-44")[3].value;
	var nodoFotoAnaMaria = document.createTextNode(fotoAnaMaria);
	var avatarChat = document.getElementsByClassName("avatar")[12];
	var fotoChat = avatarChat.getElementsByTagName("img")[0];
	fotoChat.innerHTML = "";
	fotoChat.appendChild(nodoFotoAnaMaria);

	var nombreAnaMaria = document.getElementsByClassName("w-contact-name")[3].value;
	var nodoNombreAnaMaria = document.createTextNode(nombreAnaMaria);
	var nombreChat = avatarChat.getElementsByTagName("h4")[0];
	nombreChat.innerHTML = "";
	nombreChat.appendChild(nodoNombreAnaMaria);

	var nodoHoraUltimaConexion = document.createTextNode("Última conexión a las 10:23");
	var ultimaConexion = avatarChat.getElementsByTagName("ul")[0];
	ultimaConexion.innerHTML = "";
	ultimaConexion.appendChild(nodoHoraUltimaConexion);

	var chatMsjes = document.getElementById("chat");
	var crearDiv1 = document.createElement("div");
	chatMsjes.innerHTML = "";
	chatMsjes.appendChild(crearDiv1);

	var crearDiv2 = document.createElement("div");
	var crearParrafoMsje = document.createElement("p");
	var crearDivHora = document.createElement("div");
	var ultimoMsjeAnaMaria = document.getElementsByClassName("w-last-message")[3].value;
	var nodoUltimoMsjeAnaMaria = document.createTextNode(ultimoMsjeAnaMaria);
	var horaUltimoMsjeAnaMaria = document.getElementsByClassName("time")[3].value;
	var nodoHora = document.createTextNode(horaUltimoMsjeAnaMaria); 

	crearDiv1.appendChild(crearDiv2);
	crearDiv2.appendChild(crearParrafoMsje);
	crearParrafoMsje.appendChild(nodoUltimoMsjeAnaMaria);
	crearDiv2.appendChild(crearDivHora);
	crearDivHora.appendChild(nodoHora);

	//atributos
	crearDiv1.setAttribute("class", "w-message w-message-in");
	crearDiv2.setAttribute("class", "w-message-text")
	crearDivHora.setAttribute("class", "time");
	//otros
}

function seleccionarChatRodulfo() {
	//rescatar elementos
	var fotoRodulfo = document.getElementsByClassName("wh-44")[4].value;
	var nodoFotoRodulfo = document.createTextNode(fotoRodulfo);
	var avatarChat = document.getElementsByClassName("avatar")[12];
	var fotoChat = avatarChat.getElementsByTagName("img")[0];
	fotoChat.innerHTML = "";
	fotoChat.appendChild(nodoFotoRodulfo);

	var nombreRodulfo = document.getElementsByClassName("w-contact-name")[4].value;
	var nodoNombreRodulfo = document.createTextNode(nombreRodulfo);
	var nombreChat = avatarChat.getElementsByTagName("h4")[0];
	nombreChat.innerHTML = "";
	nombreChat.appendChild(nodoNombreRodulfo);

	var nodoHoraUltimaConexion = document.createTextNode("Última conexión a las 10:23");
	var ultimaConexion = avatarChat.getElementsByTagName("ul")[0];
	ultimaConexion.innerHTML = "";
	ultimaConexion.appendChild(nodoHoraUltimaConexion);

	var chatMsjes = document.getElementById("chat");
	var crearDiv1 = document.createElement("div");
	chatMsjes.innerHTML = "";
	chatMsjes.appendChild(crearDiv1);

	var crearDiv2 = document.createElement("div");
	var crearParrafoMsje = document.createElement("p");
	var crearDivHora = document.createElement("div");
	var ultimoMsjeRodulfo = document.getElementsByClassName("w-last-message")[4].value;
	var nodoUltimoMsjeRodulfo = document.createTextNode(ultimoMsjeRodulfo);
	var horaUltimoMsjeRodulfo = document.getElementsByClassName("time")[4].value;
	var nodoHora = document.createTextNode(horaUltimoMsjeRodulfo); 

	crearDiv1.appendChild(crearDiv2);
	crearDiv2.appendChild(crearParrafoMsje);
	crearParrafoMsje.appendChild(nodoUltimoMsjeRodulfo);
	crearDiv2.appendChild(crearDivHora);
	crearDivHora.appendChild(nodoHora);

	//atributos
	crearDiv1.setAttribute("class", "w-message w-message-in");
	crearDiv2.setAttribute("class", "w-message-text")
	crearDivHora.setAttribute("class", "time");
	//otros
}

function seleccionarChatAndrea() {
	//rescatar elementos
	var fotoAndrea = document.getElementsByClassName("wh-44")[5].value;
	var nodoFotoAndrea = document.createTextNode(fotoAndrea);
	var avatarChat = document.getElementsByClassName("avatar")[12];
	var fotoChat = avatarChat.getElementsByTagName("img")[0];
	fotoChat.innerHTML = "";
	fotoChat.appendChild(nodoFotoAndrea);

	var nombreAndrea = document.getElementsByClassName("w-contact-name")[5].value;
	var nodoNombreAndrea = document.createTextNode(nombreAndrea);
	var nombreChat = avatarChat.getElementsByTagName("h4")[0];
	nombreChat.innerHTML = "";
	nombreChat.appendChild(nodoNombreAndrea);

	var nodoHoraUltimaConexion = document.createTextNode("Última conexión a las 10:23");
	var ultimaConexion = avatarChat.getElementsByTagName("ul")[0];
	ultimaConexion.innerHTML = "";
	ultimaConexion.appendChild(nodoHoraUltimaConexion);

	var chatMsjes = document.getElementById("chat");
	var crearDiv1 = document.createElement("div");
	chatMsjes.innerHTML = "";
	chatMsjes.appendChild(crearDiv1);

	var crearDiv2 = document.createElement("div");
	var crearParrafoMsje = document.createElement("p");
	var crearDivHora = document.createElement("div");
	var ultimoMsjeAndrea = document.getElementsByClassName("w-last-message")[5].value;
	var nodoUltimoMsjeAndrea = document.createTextNode(ultimoMsjeAndrea);
	var horaUltimoMsjeAndrea = document.getElementsByClassName("time")[5].value;
	var nodoHora = document.createTextNode(horaUltimoMsjeAndrea); 

	crearDiv1.appendChild(crearDiv2);
	crearDiv2.appendChild(crearParrafoMsje);
	crearParrafoMsje.appendChild(nodoUltimoMsjeAndrea);
	crearDiv2.appendChild(crearDivHora);
	crearDivHora.appendChild(nodoHora);

	//atributos
	crearDiv1.setAttribute("class", "w-message w-message-in");
	crearDiv2.setAttribute("class", "w-message-text")
	crearDivHora.setAttribute("class", "time");
	//otros
}

function seleccionarChatPaula() {
	//rescatar elementos
	var fotoPaula = document.getElementsByClassName("wh-44")[6].value;
	var nodoFotoPaula = document.createTextNode(fotoPaula);
	var avatarChat = document.getElementsByClassName("avatar")[12];
	var fotoChat = avatarChat.getElementsByTagName("img")[0];
	fotoChat.innerHTML = "";
	fotoChat.appendChild(nodoFotoPaula);

	var nombrePaula = document.getElementsByClassName("w-contact-name")[6].value;
	var nodoNombrePaula = document.createTextNode(nombrePaula);
	var nombreChat = avatarChat.getElementsByTagName("h4")[0];
	nombreChat.innerHTML = "";
	nombreChat.appendChild(nodoNombrePaula);

	var nodoHoraUltimaConexion = document.createTextNode("Última conexión a las 10:23");
	var ultimaConexion = avatarChat.getElementsByTagName("ul")[0];
	ultimaConexion.innerHTML = "";
	ultimaConexion.appendChild(nodoHoraUltimaConexion);

	var chatMsjes = document.getElementById("chat");
	var crearDiv1 = document.createElement("div");
	chatMsjes.innerHTML = "";
	chatMsjes.appendChild(crearDiv1);

	var crearDiv2 = document.createElement("div");
	var crearParrafoMsje = document.createElement("p");
	var crearDivHora = document.createElement("div");
	var ultimoMsjePaula = document.getElementsByClassName("w-last-message")[6].value;
	var nodoUltimoMsjePaula = document.createTextNode(ultimoMsjePaula);
	var horaUltimoMsjePaula = document.getElementsByClassName("time")[6].value;
	var nodoHora = document.createTextNode(horaUltimoMsjePaula); 

	crearDiv1.appendChild(crearDiv2);
	crearDiv2.appendChild(crearParrafoMsje);
	crearParrafoMsje.appendChild(nodoUltimoMsjePaula);
	crearDiv2.appendChild(crearDivHora);
	crearDivHora.appendChild(nodoHora);

	//atributos
	crearDiv1.setAttribute("class", "w-message w-message-in");
	crearDiv2.setAttribute("class", "w-message-text")
	crearDivHora.setAttribute("class", "time");
	//otros
}

function seleccionarChatKaty() {
	//rescatar elementos
	var fotoKaty = document.getElementsByClassName("wh-44")[7].value;
	var nodoFotoKaty = document.createTextNode(fotoKaty);
	var avatarChat = document.getElementsByClassName("avatar")[12];
	var fotoChat = avatarChat.getElementsByTagName("img")[0];
	fotoChat.innerHTML = "";
	fotoChat.appendChild(nodoFotoKaty);

	var nombreKaty = document.getElementsByClassName("w-contact-name")[7].value;
	var nodoNombreKaty = document.createTextNode(nombreKaty);
	var nombreChat = avatarChat.getElementsByTagName("h4")[0];
	nombreChat.innerHTML = "";
	nombreChat.appendChild(nodoNombreKaty);

	var nodoHoraUltimaConexion = document.createTextNode("Última conexión a las 10:23");
	var ultimaConexion = avatarChat.getElementsByTagName("ul")[0];
	ultimaConexion.innerHTML = "";
	ultimaConexion.appendChild(nodoHoraUltimaConexion);

	var chatMsjes = document.getElementById("chat");
	var crearDiv1 = document.createElement("div");
	chatMsjes.innerHTML = "";
	chatMsjes.appendChild(crearDiv1);

	var crearDiv2 = document.createElement("div");
	var crearParrafoMsje = document.createElement("p");
	var crearDivHora = document.createElement("div");
	var ultimoMsjeKaty = document.getElementsByClassName("w-last-message")[7].value;
	var nodoUltimoMsjeKaty = document.createTextNode(ultimoMsjeKaty);
	var horaUltimoMsjeKaty = document.getElementsByClassName("time")[7].value;
	var nodoHora = document.createTextNode(horaUltimoMsjeKaty); 

	crearDiv1.appendChild(crearDiv2);
	crearDiv2.appendChild(crearParrafoMsje);
	crearParrafoMsje.appendChild(nodoUltimoMsjeKaty);
	crearDiv2.appendChild(crearDivHora);
	crearDivHora.appendChild(nodoHora);

	//atributos
	crearDiv1.setAttribute("class", "w-message w-message-in");
	crearDiv2.setAttribute("class", "w-message-text")
	crearDivHora.setAttribute("class", "time");
	//otros
}

function seleccionarChatAldo() {
	//rescatar elementos
	var fotoAldo = document.getElementsByClassName("wh-44")[8].value;
	var nodoFotoAldo = document.createTextNode(fotoAldo);
	var avatarChat = document.getElementsByClassName("avatar")[12];
	var fotoChat = avatarChat.getElementsByTagName("img")[0];
	fotoChat.innerHTML = "";
	fotoChat.appendChild(nodoFotoAldo);

	var nombreAldo = document.getElementsByClassName("w-contact-name")[8].value;
	var nodoNombreAldo = document.createTextNode(nombreAldo);
	var nombreChat = avatarChat.getElementsByTagName("h4")[0];
	nombreChat.innerHTML = "";
	nombreChat.appendChild(nodoNombreAldo);

	var nodoHoraUltimaConexion = document.createTextNode("Última conexión a las 10:23");
	var ultimaConexion = avatarChat.getElementsByTagName("ul")[0];
	ultimaConexion.innerHTML = "";
	ultimaConexion.appendChild(nodoHoraUltimaConexion);

	var chatMsjes = document.getElementById("chat");
	var crearDiv1 = document.createElement("div");
	chatMsjes.innerHTML = "";
	chatMsjes.appendChild(crearDiv1);

	var crearDiv2 = document.createElement("div");
	var crearParrafoMsje = document.createElement("p");
	var crearDivHora = document.createElement("div");
	var ultimoMsjeAldo = document.getElementsByClassName("w-last-message")[8].value;
	var nodoUltimoMsjeAldo = document.createTextNode(ultimoMsjeAldo);
	var horaUltimoMsjeAldo = document.getElementsByClassName("time")[8].value;
	var nodoHora = document.createTextNode(horaUltimoMsjeAldo); 

	crearDiv1.appendChild(crearDiv2);
	crearDiv2.appendChild(crearParrafoMsje);
	crearParrafoMsje.appendChild(nodoUltimoMsjeAldo);
	crearDiv2.appendChild(crearDivHora);
	crearDivHora.appendChild(nodoHora);

	//atributos
	crearDiv1.setAttribute("class", "w-message w-message-in");
	crearDiv2.setAttribute("class", "w-message-text")
	crearDivHora.setAttribute("class", "time");
	//otros
}