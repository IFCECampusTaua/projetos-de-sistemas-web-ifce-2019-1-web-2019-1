// Função criada em um arquivo externo que mostra uma mensagem.

// Método 1
/* function imprimirMsg(){
	alert("AIA");
}
*/

// Método 2
function imprimirMsg(){
	alert("Olá mundo");
}
// captura o elemento com o id "btn" (botão) e, ao clicá-lo, executará a função "imprimirMsg"
document.getElementById("btn").addEventListener("click", imprimirMsg); // "click" em vez de "onclick"