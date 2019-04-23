var input1 = document.getElementById("cx1");

window.onclick = function(evento) {
	if (evento.target == input1) {
		alert("Primeira caixa ativada!");
	}else{alert("Perdeu o foco!");}
}