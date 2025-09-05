// Obtendo dados
let totalAulasSemestre = parseInt(prompt("Informe o total de aulas do semestre"));
let totalFaltas = parseInt(prompt("Informe a quantidade de faltas do aluno"));
let nota1 = parseFloat(prompt("Informe sua primeira nota"));
let nota2 = parseFloat(prompt("Informe sua segunda nota"));
let notaRecuperacao = 0; // Inicializamos a nota de recuperação

// Calculando o percentual de presença
let percentualPresenca = (((totalAulasSemestre - totalFaltas) / totalAulasSemestre) * 100).toFixed(2);

// Definindo as constantes para as regras de aprovação
const PRESENCA_MINIMA = 75;
const NOTA_APROVACAO = 7;
const NOTA_RECUPERACAO_MINIMA = 5;

let situacaoFinal = ""; // Declaramos a variável que armazenará o resultado final
let mediaNotas = 0;

// Verificando primeiro se o aluno foi reprovado por falta
if (percentualPresenca < PRESENCA_MINIMA) {
    situacaoFinal = "REPROVADO POR FALTA";
} else {
    // Se a presença for suficiente, calcula-se a média das notas
    mediaNotas = ((nota1 + nota2) / 2).toFixed(2);
    
    // E agora, verifica a situação do aluno com base na nota
    if (mediaNotas >= NOTA_APROVACAO) {
        situacaoFinal = "APROVADO";
    } else if (mediaNotas >= NOTA_RECUPERACAO_MINIMA) {
        // Se a média estiver na faixa de recuperação, solicitamos a nota da prova
        notaRecuperacao = parseFloat(prompt("Informe a nota da prova de recuperação"));
        
        if (notaRecuperacao >= NOTA_RECUPERACAO_MINIMA) {
            situacaoFinal = "APROVADO (após recuperação)";
        } else {
            situacaoFinal = "REPROVADO (após recuperação)";
        }
    } else {
        situacaoFinal = "REPROVADO POR NOTA";
    }
}

// ------------------------------------------
// Exibindo os resultados conforme solicitado
// ------------------------------------------
console.log("\n--- Boletim do Aluno ---");
console.log(`Número de aulas do semestre: ${totalAulasSemestre}`);
console.log(`Número de faltas do aluno: ${totalFaltas}`);
console.log(`Percentual de presença do aluno: ${percentualPresenca}%`);

console.log(`\nPrimeira nota: ${nota1}`);
console.log(`Segunda nota: ${nota2}`);

// Exibimos a nota de recuperação apenas se ela tiver sido informada
if (situacaoFinal.includes("recuperação")) {
    console.log(`Nota complementar (recuperação): ${notaRecuperacao}`);
} else {
    console.log(`Nota complementar (recuperação): Não se aplica`);
}

console.log(`\nSituação final do aluno: ${situacaoFinal}`);