var nome, nota1, nota2, media;
nome = prompt("digite o nome do aluno:")

nota1 = prompt("digite a primeira nota do aluno:" ) 
nota2 = prompt("digite a segunda nota 2 do aluno:" )

media = (parseInt(nota1) + parseInt(nota2)) / 2;

if (media >= 10)
	alert("Aprovado!: " + nome)

else alert("Reprovado!: " + nome)
  