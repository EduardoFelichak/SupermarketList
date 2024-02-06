var itens = [];

document.querySelector('input[type=submit]')
.addEventListener('click', () => {
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');

    if ((nomeProduto.value != '') && (precoProduto.value != '')) {
        itens.push({
            nome: nomeProduto.value,
            valor: precoProduto.value
        });

        atualizaListaProdutos();

        nomeProduto.value = '';
        precoProduto.value = '';
    }
});

function limpar(idProduto) {
    let indice = parseInt(idProduto.replace('b', '')) - 1;
    itens.splice(indice, 1);
    atualizaListaProdutos();
}

function atualizaListaProdutos() {
    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0.00;
    listaProdutos.innerHTML = "";
    itens.forEach((val, index) => {
        soma += parseFloat(val.valor);
        listaProdutos.innerHTML += `
        <div class="lista-produto-single" id="c${index + 1}">
                <h3>${val.nome}</h3>
                <div class="btnLimpar-valor">
                    <h3><button id="b${index + 1}" name="trash" class="bi bi-trash3" onclick="limpar(this.id)"></button></h3>
                    <h3 class="price-produto"><span>R$${val.valor}</span></h3>
                </div>
        </div>
        `;
    });
    soma = soma.toFixed(2);
    let elementoSoma = document.querySelector('.soma-produto h2');
    elementoSoma.innerHTML = `Total: R$${soma}`;
}
