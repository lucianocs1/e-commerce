const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);

// const mongoose = require('mongoose'); // Importa o módulo mongoose para manipulação do MongoDB

// // Define o esquema para o modelo de Usuário
// const UserSchema = new mongoose.Schema({
//   name: { 
//     type: String, 
//     required: true // O campo nome é obrigatório
//   },
//   email: { 
//     type: String, 
//     unique: true, // Garante que o e-mail seja único
//     required: true, // O campo e-mail é obrigatório
//     match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Valida o formato do e-mail
//   },
//   password: { 
//     type: String, 
//     required: true // O campo senha é obrigatório
//   },
//   cartData: { 
//     type: Map, // Utiliza o tipo Map para armazenar dados de carrinho com chaves dinâmicas
//     of: Number, // Define que os valores do Map são números
//     default: {} // Define um objeto vazio como valor padrão
//   },
//   date: { 
//     type: Date, 
//     default: Date.now // Define a data atual como padrão
//   }
// });

// // Cria e exporta o modelo de Usuário baseado no esquema definido
// module.exports = mongoose.model('User', UserSchema);


