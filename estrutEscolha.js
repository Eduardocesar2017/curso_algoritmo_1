

function acaoBotao(params){

var valor1, valor2, resultado, operacao; 
valor1 = prompt("digite o primeiro valor:")

operacao = prompt("digite a operaca a sua escolha: Ex: +, -, *, /")

valor2 = prompt("digite o segundo valor:")

switch (operacao){
	case "+" :
		resultado = parseInt(valor1)  + parseInt(valor2)
	break;

	case "-" :
		resultado = parseInt(valor1)  - parseInt(valor2)
	break;

	case "*" :
		resultado = parseInt(valor1)  * parseInt(valor2)
	break;

	case "/" :
		resultado = parseInt(valor1)  / parseInt(valor2)
	break;
}
document.getElementById('paragrafo').innerText = resultado
}