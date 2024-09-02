const express = require('express');
const path = require('path');
const cors = require('cors');
const multer = require('multer');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const produtoRoutes = require('./routes/produtoRoutes');
const carrinhoRoutes = require('./routes/carrinhoRoutes');

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage });

app.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `/images/${req.file.filename}`
  });
});

app.use('/images', express.static('upload/images'));

app.use(authRoutes);
app.use(produtoRoutes);
app.use(carrinhoRoutes);

app.listen(port, (error) => {
  if (!error) console.log(`Server rodando na porta: ${port}`);
  else console.log('Error:', error);
});

// const express = require('express'); // Importa o módulo Express para criar o servidor e gerenciar rotas
// const path = require('path'); // Importa o módulo path para manipulação de caminhos de arquivos
// const cors = require('cors'); // Importa o módulo CORS para gerenciar políticas de compartilhamento de recursos
// const multer = require('multer'); // Importa o módulo Multer para manipulação de uploads de arquivos
// const connectDB = require('./config/db'); // Importa a função para conectar ao banco de dados
// const authRoutes = require('./routes/authRoutes'); // Importa as rotas de autenticação
// const productRoutes = require('./routes/productRoutes'); // Importa as rotas de produtos
// const cartRoutes = require('./routes/cartRoutes'); // Importa as rotas de carrinho

// const app = express(); // Cria uma instância do aplicativo Express
// const port = process.env.PORT || 4000; // Define a porta do servidor, usa a variável de ambiente ou o valor padrão 4000

// // Conecta ao banco de dados MongoDB
// connectDB();

// // Middleware para parsear o corpo das requisições como JSON
// app.use(express.json());

// // Middleware para permitir requisições de diferentes origens (CORS)
// app.use(cors());

// // Configuração do Multer para gerenciamento de uploads de arquivos
// const storage = multer.diskStorage({
//   destination: './upload/images', // Define o diretório onde os arquivos serão armazenados
//   filename: (req, file, cb) => {
//     // Define o nome do arquivo usando o campo do arquivo, o timestamp atual e a extensão original
//     cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//   }
// });
// const upload = multer({ storage });

// // Rota para upload de imagens de produtos
// app.post('/upload', upload.single('product'), (req, res) => {
//   // Retorna a URL da imagem carregada no formato JSON
//   res.json({
//     success: 1,
//     image_url: `/images/${req.file.filename}`
//   });
// });

// // Serve arquivos estáticos do diretório de uploads
// app.use('/images', express.static('upload/images'));

// // Define as rotas para autenticação, produtos e carrinho
// app.use(authRoutes);
// app.use(productRoutes);
// app.use(cartRoutes);

// // Inicia o servidor na porta especificada e imprime uma mensagem no console
// app.listen(port, (error) => {
//   if (!error) console.log(`Servidor rodando na porta ${port}`);
//   else console.log('Erro:', error);
// });
