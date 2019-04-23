// Função para verificar os dados digitados na caixa de texto.
function verificar() {

	var n, text; 
	
	n = document.getElementById("texto").value;
	
	if (n >= 0 && n < 9) {
		text = "Insuficiente!";
	}else if (n > 9 && n < 14) {
		text = "Bom!";
	}else if (n > 14) {
		text = "Muito Bom!";
	}else {
		text = "Nada foi digitado!";
	}
    document.getElementById("text");
}