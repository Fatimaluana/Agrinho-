// Seleção dos elementos da página
const btnCalcular = document.getElementById('btnCalcular');
const inputPreco = document.getElementById('preco');
const inputDesconto = document.getElementById('desconto');
const divResultado = document.getElementById('resultado');

// Evento disparado quando o usuário clica no botão
btnCalcular.addEventListener('click', () => {
    // Captura os valores digitados e os transforma em números
    const preco = parseFloat(inputPreco.value);
    const desconto = parseFloat(inputDesconto.value);

    // =========================================================================
    // CONSELHO 2: VALIDE TUDO O QUE VOCÊ CRIAR (Testando entradas inválidas)
    // =========================================================================
    
    // Validação 1: Verificar se os campos foram deixados em branco
    if (isNaN(preco) || isNaN(desconto)) {
        exibirMensagem("Por favor, preencha ambos os campos com números válidos.", "erro");
        return; // Interrompe a execução aqui para proteger o cálculo
    }

    // Validação 2: O preço não pode ser zero ou negativo
    if (preco <= 0) {
        exibirMensagem("O preço original deve ser maior que zero.", "erro");
        return;
    }

    // Validação 3: O desconto não pode ser negativo e nem maior que 100%
    if (desconto < 0 || desconto > 100) {
        exibirMensagem("O desconto deve ser um valor entre 0% e 100%.", "erro");
        return;
    }

    // Se o código passou por todas as validações acima, o cálculo é seguro:
    const valorDesconto = (preco * desconto) / 100;
    const precoFinal = preco - valorDesconto;

    // =========================================================================
    // CONSELHO 3: APRESENTE OS RESULTADOS DE FORMA CLARA
    // =========================================================================
    const mensagemSucesso = `
        <strong>Cálculo concluído!</strong><br>
        Você economizou: R$ ${valorDesconto.toFixed(2)}<br>
        <strong>Preço Final: R$ ${precoFinal.toFixed(2)}</strong>
    `;
    
    exibirMensagem(mensagemSucesso, "sucesso");
});

// Função interna criada apenas para injetar o texto de forma limpa na tela
function exibirMensagem(texto, tipo) {
    divResultado.innerHTML = texto;
    divResultado.className = tipo; // Aplica o estilo CSS de 'erro' ou 'sucesso'
    divResultado.style.display = 'block'; // Torna a div visível para o usuário
}