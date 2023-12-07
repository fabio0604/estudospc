<?php
// Conectar ao banco de dados (substitua com suas credenciais)
$conexao = new mysqli('localhost', 'usuario', 'senha', 'perfumes_shop');

// Verificar conexão
if ($conexao->connect_error) {
    die("Erro na conexão: " . $conexao->connect_error);
}

// Receber os dados do formulário
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Inserir os dados na tabela 'usuarios'
$sql = "INSERT INTO usuarios (username, email, password) VALUES ('$username', '$email', '$password')";

if ($conexao->query($sql) === TRUE) {
    echo "Registro criado com sucesso!";
} else {
    echo "Erro ao criar registro: " . $conexao->error;
}

// Fechar conexão
$conexao->close();
?>
