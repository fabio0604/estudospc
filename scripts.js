// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto, preco) {
  const carrinho = document.querySelector('.cart-items');

  // Criar um novo item para o carrinho
  const novoItem = document.createElement('li');
  novoItem.innerText = `${produto} - R$${preco.toFixed(2)}`;

  // Adicionar o novo item à lista de itens do carrinho
  carrinho.appendChild(novoItem);

  // Atualizar o total do carrinho
  const totalAtual = parseFloat(document.querySelector('.cart-total').innerText);
  const novoTotal = totalAtual + preco;
  document.querySelector('.cart-total').innerText = novoTotal.toFixed(2);
}

// Obtemos todos os botões de compra
const buyButtons = document.querySelectorAll('.buy-button');

// Adicionamos um evento de clique a cada botão
buyButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    // Obtemos os dados do produto a partir do atributo 'data' do botão
    const produto = button.getAttribute('data-product');
    const preco = parseFloat(button.getAttribute('data-price'));

    // Chamamos a função para adicionar ao carrinho com os dados do produto
    adicionarAoCarrinho(produto, preco);
  });
});
