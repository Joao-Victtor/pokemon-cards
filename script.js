const btnAvancar = document.getElementById('btn-avancar') 
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao')
let cartaoAtual = 0
// let cartaoAtual será usado para selecionar os cartões

// Pegar cartão atual e remover classe .visivel
function esconderCartao() {
    const cartaoSelecionado = document.querySelector(".visivel")
    cartaoSelecionado.classList.remove("visivel")
}

// Adiciona classe visivel ao cartão selecionado
function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add("visivel")
}

// Executa funcão ao clicar no botão
btnAvancar.addEventListener("click", function() {
    // Para a execução da função
    if (cartaoAtual === cartoes.length - 1) return;
    
    //Remover classe do cartão atual e adiciona no próximo
    esconderCartao()
    
    cartaoAtual++
    mostrarCartao(cartaoAtual)
})

// Executa função de voltar os cartões
btnVoltar.addEventListener("click", function () {
    if (cartaoAtual === 0) return;

    esconderCartao()
    
    cartaoAtual--
    mostrarCartao(cartaoAtual)
})
