const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number },
  old_price: { type: Number },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Product', ProductSchema);

// const mongoose = require('mongoose'); // Importa o módulo mongoose para manipulação do MongoDB

// // Define o esquema para o modelo de Produto
// const ProductSchema = new mongoose.Schema({
//   id: { 
//     type: Number, 
//     required: true, // O campo ID é obrigatório
//     unique: true // Garante que cada produto tenha um ID único
//   },
//   name: { 
//     type: String, 
//     required: true // O campo nome é obrigatório
//   },
//   description: { 
//     type: String, 
//     required: true // O campo descrição é obrigatório
//   },
//   image: { 
//     type: String, 
//     required: true // O campo imagem é obrigatório
//   },
//   category: { 
//     type: String, 
//     required: true // O campo categoria é obrigatório
//   },
//   new_price: { 
//     type: Number // O campo preço novo é opcional
//   },
//   old_price: { 
//     type: Number // O campo preço antigo é opcional
//   },
//   date: { 
//     type: Date, 
//     default: Date.now // Define a data atual como padrão
//   },
//   available: { 
//     type: Boolean, 
//     default: true // Define que o produto está disponível por padrão
//   }
// });

// // Cria e exporta o modelo de Produto baseado no esquema definido
// module.exports = mongoose.model('Product', ProductSchema);
