function calc(cod, n1, n2, n3) {
    let average = 0
    n1 > n2 && n1 > n3 ? average = (((n2 + n3) * 3) + (n1 * 4)) / 10 : '';
    n2 > n3 && n2 > n1 ? average = (((n1 + n3) * 3) + (n2 * 4)) / 10 : '';
    n3 > n2 && n3 > n1 ? average = (((n2 + n1) * 3) + (n3 * 4)) / 10 : '';

    let result = average >= 5 ? "Aprovado" : "Reprovado";
    return `Código do aluno: ${cod}.\nNota 1: ${n1}.\nNota 2: ${n2}.\nNota 3: ${n3}.\nMédia: ${average}.\nSituação: ${result}.`
}

alert(calc(1, 2, 10, 8));