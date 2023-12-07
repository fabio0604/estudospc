// Função para lidar com o envio do formulário de registro
document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Exibir os dados de registro no console (simulação)
  console.log('Nome de Usuário:', username);
  console.log('Email:', email);
  console.log('Senha:', password);

  // Aqui você pode adicionar lógica para enviar os dados do registro para um servidor ou back-end
  // Por exemplo, fazer uma solicitação HTTP para um endpoint de registro
});

// Função para lidar com o envio do formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Aqui você pode adicionar lógica para verificar as credenciais do usuário
  // Por enquanto, vamos apenas exibir os dados de login no console
  console.log('Nome de Usuário:', username);
  console.log('Senha:', password);

  // Você pode adicionar aqui a lógica para autenticação do usuário
  // Verificar se as credenciais são válidas, redirecionar para uma página de perfil, etc.
});

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

// Evento de clique no botão Finalizar Compra
const checkoutButton = document.querySelector('.checkout-button');
checkoutButton.addEventListener('click', () => {
  const total = parseFloat(document.querySelector('.cart-total').innerText);
  const formaPagamento = document.getElementById('formas-pagamento').value;
  
  if (total > 0) {
    // Simula um pagamento ao exibir uma mensagem de confirmação
    alert(`Obrigado por sua compra! Pagamento de R$${total.toFixed(2)} realizado com sucesso via ${formaPagamento}.`);

    // Limpa o carrinho após a compra ser confirmada
    const carrinho = document.querySelector('.cart-items');
    carrinho.innerHTML = '';
    document.querySelector('.cart-total').innerText = '0.00';
  } else {
    alert('Seu carrinho está vazio. Adicione itens antes de finalizar a compra.');
  }
});
