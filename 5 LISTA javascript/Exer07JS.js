// Função para verificar os dados digitados na caixa de texto.
function verificar() {
	var campo = document.getElementById("fieldText");
	var txt   = document.getElementById("fieldText").value;
	var n = txt.length;
	if (n > 0 && n < 10) {
		document.getElementById("mensagem").innerHTML = "Insuficiente!";
	}else if (n > 10 && n < 14) {
		document.getElementById("mensagem").innerHTML = "Bom!";
	}else if (n > 14) {
		document.getElementById("mensagem").innerHTML = "Muito Bom!";
	}else {
		document.getElementById("mensagem").innerHTML = "Nada foi digitado!";
	}
}
document.getElementById("btn").addEventListener("click", verificar); 

// Função para limpar o campo e a mensagem de verificação.
function limparTexto() {
    document.getElementById("myForm").reset();
    document.getElementById("mensagem").innerHTML = "";

}
document.getElementById("btnClear").addEventListener("click", limparTexto);