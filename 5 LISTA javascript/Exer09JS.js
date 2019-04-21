
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  	/*
    Concatenação: 2 + 2 = 22
  	var Soma = parseInt(2) + parseInt(2);
  	*/
  	// Capturando o valor do input com id "salarioAtual"
    var valorSalario = document.getElementById("salarioAtual").value;
    // Verificação dos salários
    if (valorSalario <= 280) {

    	var valorAumento = valorSalario * 0.2; // Valor do aumento
    	var novoSalario = valorSalario * 1.2;  // Valor do novo salário

    	var arredondado = parseFloat(novoSalario.toFixed(0));
  		document.getElementById("novoSal").innerHTML = "R$" + " " + arredondado + ",00";
  		document.getElementById("salAntes").innerHTML = "R$" + " " + valorSalario + ",00";
  		document.getElementById("percAumenAplic").innerHTML = "20%";
  		var arredondado = parseFloat(valorAumento.toFixed(0));
  		document.getElementById("aumento").innerHTML = "R$" + " " + arredondado + ",00";

    }else if (valorSalario > 280 && valorSalario <= 700) {

    	var valorAumento = valorSalario * 0.15; // Valor do aumento
    	var novoSalario = valorSalario * 1.15;  // Valor do novo salário

    	var arredondado = parseFloat(novoSalario.toFixed(0));
  		document.getElementById("novoSal").innerHTML = "R$" + " " + arredondado + ",00";
  		document.getElementById("salAntes").innerHTML = "R$" + " " + valorSalario + ",00";
  		document.getElementById("percAumenAplic").innerHTML = "15%";
  		var arredondado = parseFloat(valorAumento.toFixed(0));
  		document.getElementById("aumento").innerHTML = "R$" + " " + arredondado + ",00";

    }else if (valorSalario > 700 && valorSalario <= 1500) {

    	var valorAumento = valorSalario * 0.1; // Valor do aumento
    	var novoSalario = valorSalario * 1.1;  // Valor do novo salário

    	var arredondado = parseFloat(novoSalario.toFixed(0));
  		document.getElementById("novoSal").innerHTML = "R$" + " " + arredondado + ",00";
  		document.getElementById("salAntes").innerHTML = "R$" + " " + valorSalario + ",00";
  		document.getElementById("percAumenAplic").innerHTML = "10%";
  		var arredondado = parseFloat(valorAumento.toFixed(0));
  		document.getElementById("aumento").innerHTML = "R$" + " " + arredondado + ",00";

  	}else if (valorSalario > 1500) {

    	var valorAumento = valorSalario * 0.05; // Valor do aumento
    	var novoSalario = valorSalario * 1.05;  // Valor do novo salário

    	var arredondado = parseFloat(novoSalario.toFixed(0));
  		document.getElementById("novoSal").innerHTML = "R$" + " " + arredondado + ",00";
  		document.getElementById("salAntes").innerHTML = "R$" + " " + valorSalario + ",00";
  		document.getElementById("percAumenAplic").innerHTML = "5%";
  		var arredondado = parseFloat(valorAumento.toFixed(0));
  		document.getElementById("aumento").innerHTML = "R$" + " " + arredondado + ",00";
  	}
});