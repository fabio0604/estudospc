// Obtemos todos os botões de compra
const buyButtons = document.querySelectorAll('.buy-button');

// Adicionamos um evento de clique a cada botão
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Aqui você pode adicionar a lógica desejada para a ação de compra
    // Por exemplo, adicionar o produto ao carrinho ou redirecionar para o checkout
    // Neste exemplo, apenas exibiremos uma mensagem no console
    console.log('Produto adicionado ao carrinho!');
  });
});
