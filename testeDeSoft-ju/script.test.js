// Função para somar dois números 
function adicionar (a,b){
    return a + b;
}
//Função para calcular o dobro 
function calcularDobro (valor){
    return valor * 2;
}

// TESTE DE INTEGRIDADE 
describe("Teste de integração", function () {
    it("deve somar dois números e calcular o dobro", function () {
        const resultadoSoma = adicionar(2, 3);
        const resultadoDobro = calcularDobro(resultadoSoma);
        //Verifica se o dobro está correto 
        expect(resultadoDobro).toBe(10)
    });

    it("Deve calcular o dobro mesmo com números negativos", function () {
        const resultadoSoma = adicionar(-2, -3);
        const resultadoDobro = calcularDobro(resultadoSoma);
        expect(resultadoDobro).toBe(-10);
    });
});


//Função para concatenar duas partes de texto 
function concatenarTexto(parte1, parte2){
    return parte1 + ' ' + parte2;
}
//Função para deixar os textos maíuculos
function converter(texto){
    return texto.toUpperCase();
}

//TESTE DE INTEGRIDADE
describe("Segundo teste de integração", function(){
    it("Deve juntar dois textose deixar maíusculo", function(){
        const texto = concatenarTexto('Tudo', 'bem');
        const textoMaiusculo = converter(texto);
        expect(textoMaiusculo).toBe('TUDO BEM');

    });

    it("Deve lidar com String vazia", function(){
        const texto = concatenarTexto('', 'teste');
        const textoMaiusculo = converter(texto);
        expect(textoMaiusculo).toBe(' TESTE')
    });
});