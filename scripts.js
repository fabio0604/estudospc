// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produto, preco) {
  // Esta é uma simulação simples, na prática você enviaria esses dados para um carrinho de compras ou serviço back-end
  console.log(`"${produto}" foi adicionado ao carrinho por R$${preco}.`);
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
