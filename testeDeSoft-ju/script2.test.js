//Exercicio 1
function somarNotas(nota1,nota2,nota3,nota4){
    return nota1 + nota2 + nota3 + nota4;
}

function calcularMedia(somaDasNotas, quantidadeDeNotas){
    let media = somaDasNotas / quantidadeDeNotas;
   return media;
}

function situacaoAluno(media){
    if(media >= 7){
        return("Aluno APROVADO")
    }else{
        return("Aluno REPROVADO")
    }
}

describe("Teste das somas - média maior que 7", function(){
    it("Verifica se a soma está correta", function(){
        const resultadoSoma = somarNotas(9, 7, 8, 8);
        expect(resultadoSoma).toBe(32)
    })
    it("Verifica se a média está correta", function(){ 
        const resultadoMedia = calcularMedia(32, 4);
        expect(resultadoMedia).toBe(8)
    })
    it("Verifica se o aluno está aprovado", function(){
        const resultadoMedia = calcularMedia(32, 4);
        const resultadoSituacao = situacaoAluno(resultadoMedia);
        expect(resultadoSituacao).toBe("Aluno APROVADO")
    })   
})

describe("Teste das somas - média menor que 5", function () {
    it("Verifica se a soma está correta", function () {
        const resultadoSoma = somarNotas(4, 3, 5, 4);
        expect(resultadoSoma).toBe(16);
    });
    it("Verifica se a média está correta", function () {
        const resultadoMedia = calcularMedia(16, 4);
        expect(resultadoMedia).toBe(4);
    });
    it("Verifica se o aluno está reprovado", function () {
        const resultadoMedia = calcularMedia(16, 4);
        const resultadoSituacao = situacaoAluno(resultadoMedia);
        expect(resultadoSituacao).toBe("Aluno REPROVADO");
    });
});




//Exercicio 2
function multiplicar(a,b){
    return a * b
}
function calcularTriplo(valor){
    return valor * 3
} 

describe("Verificar multiplicação e triplo", function(){
    it("Deve multiplicar e calcular triplo", function(){
        const resultadoMult = multiplicar(2,3);
        const resultadoTriplo = calcularTriplo(resultadoMult);
        expect(resultadoTriplo).toBe(18);
    })
    it("Deve multiplicar e calcular triplo- dois números negativos", function(){
        const resultadoMult = multiplicar(-4,-5);
        const resultadoTriplo = calcularTriplo(resultadoMult);
        expect(resultadoTriplo).toBe(60);
    })
    it("Deve multiplicar e calcular triplo- dois números negativos", function(){
        const resultadoMult = multiplicar(6,-3);
        const resultadoTriplo = calcularTriplo(resultadoMult);
        expect(resultadoTriplo).toBe(-54);
    })
})



//Exercicio 3
function calcularDesconto(valorTotal) {
    if (valorTotal <= 100) {
        return 0.05; // Retorna a porcentagem de desconto como decimal
    } else if (valorTotal <= 500) { // Não precisa verificar ">= 101" porque já sabemos que é maior que 100
        return 0.10;
    } else {
        return 0.15;
    }
}

function aplicarDesconto(valorTotal) {
    const desconto = calcularDesconto(valorTotal); // Calcula a taxa de desconto
    return valorTotal * desconto; // Aplica o desconto ao valor total
}


describe("Teste do desconto- valor total de desconto", function () {
    it("Deve calcular o desconto correto para valores acima de R$ 500", function () {
        const desconto = aplicarDesconto(600); // Valor total é 600
        expect(desconto).toBe(90); // 15% de 600 é 90
    });

    it("Deve calcular o desconto correto para valores entre R$ 101 e R$ 500", function () {
        const desconto = aplicarDesconto(300); // Valor total é 300
        expect(desconto).toBe(30); // 10% de 300 é 30
    });

    it("Deve calcular o desconto correto para valores de até R$ 100", function () {
        const desconto = aplicarDesconto(50); // Valor total é 50
        expect(desconto).toBe(2.5); // 5% de 50 é 2.5
    });
});

describe("Desconto", function(){
    it("verificar se o desconto esta correto- quanto de desconto", function(){
        const valorTotal = calcularDesconto(100);
        const desconto = aplicarDesconto(100, valorTotal);
        expect(valorTotal).toBe(0.05)
    })

    it("verificar se o desconto esta correto", function(){
        const valorTotal = calcularDesconto(250);
        const desconto = aplicarDesconto(250, valorTotal);
        expect(valorTotal).toBe(0.1)
    })

    it("verificar se o desconto esta correto", function(){
        const valorTotal = calcularDesconto(502);
        const desconto = aplicarDesconto(502, valorTotal);
        expect(valorTotal).toBe(0.15)
    })
})