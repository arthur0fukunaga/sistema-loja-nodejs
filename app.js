const express = require('express');
const app = express();
const PORT = 3000;

const clientes = [
  { nome: "João", cpf: "123.456.789-00", telefone: "(28) 2665-5469", endereco: "Rua A, 123" },
  { nome: "Maria", cpf: "987.654.321-00", telefone: "(82) 2586-7317", endereco: "Av. B, 456" },
  { nome: "Pedro", cpf: "321.654.987-00", telefone: "(75) 3946-7709", endereco: "Rua C, 789" },
  { nome: "Ana", cpf: "111.222.333-44", telefone: "(64) 2866-7470", endereco: "Av. D, 101" },
  { nome: "Lucas", cpf: "555.666.777-88", telefone: "(47) 3754-5567", endereco: "Rua E, 202" },
];

const produtos = [
  { nome: "Argola Pérola em Prata 925 com Banho de Our", preco: 890.90, categoria: "Argola" },
  { nome: "Corrente Malha Cartier em Ouro Amarelo 18k - 45cm", preco: 1440.00, categoria: "Corrente" },
  { nome: "Pulseira com Diamantes em Ouro Amarelo 18K - 17 cm", preco: 47000.00, categoria: "Pulseira" },
  { nome: "Brinco com Prasiolita e Safira em Prata 925", preco: 2680.90, categoria: "Brinco" },
  { nome: "Anel em Gota com Rubi e Diamantes em Ouro Amarelo 18k", preco: 3290.99, categoria: "Anel de casamento" },
];

const pedidos = [
  { numero: '#0001', cliente: "Carlos Eduardo Martins", preco: 3490.00, quantidade: 2, produto: "Brinco Argola com Topázio em Prata 925K", status: "Em Trânsito" },
  { numero: '#0002', cliente: "Maria Clara Rodrigues", preco: 2080.99, quantidade: 3, produto: "Pulseira Elos com Safira em Ouro Amarelo 18k e Prata 925 - 18 cm", status: "Entregue" },
  { numero: '#0003', cliente: "Fernanda Lima da Costa", preco: 1890.00, quantidade: 1, produto: "Brinco Meia Argola com Topázio Azul e Topázio em Prata 925", status: "Em Sepração" },
  { numero: '#0004', cliente: "Paulo Henrique Souza", preco: 2080.99, quantidade: 2, produto: "Pulseira Elos com Safira em Ouro Amarelo 18k e Prata 925 - 18 cm", status: "Entregue" },
  { numero: '#0005', cliente: "Juliana Ribeiro de Andrade", preco: 3490.90, quantidade: 1, produto: "Brinco Argola com Topázio em Prata 925", status: "Em Trânsito" },
];

// Configurações
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Rotas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/clientes', (req, res) => {
  res.render('clientes', { clientes });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { produtos });
});

app.get('/pedidos', (req, res) => {
  res.render('pedidos', { pedidos });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});