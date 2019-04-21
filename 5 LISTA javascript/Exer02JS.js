function gerarNumero(){ 
	// Gera um número aleatório e atribui a "n".
	var n = Math.floor((Math.random() * 50) + 1);
	// Atribui ao elemento com id "exibir_Num" a valor da variável "n".
    document.getElementById("exibir_Num").innerHTML = n;
}
document.getElementById("btn").addEventListener("click", gerarNumero);