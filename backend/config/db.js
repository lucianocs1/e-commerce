const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://lncfilho:lcnfilho123@cluster0.mkkqao8.mongodb.net/e-commerce');
    console.log('MongoDB: Conectado!');
  } catch (error) {
    console.error('MongoDB: erro na conexão:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

// const mongoose = require('mongoose'); // Importa o Mongoose para facilitar a conexão com o MongoDB

// const connectDB = async () => {
//   try {
//     // Tenta conectar ao MongoDB usando a URL fornecida
//     await mongoose.connect('mongodb+srv://lncfilho:lcnfilho123@cluster0.mkkqao8.mongodb.net/e-commerce', {
//       useNewUrlParser: true, // Utiliza o novo analisador de URL para conexão
//       useUnifiedTopology: true, // Usa o novo mecanismo de gerenciamento de conexões
//       // Outras opções podem ser adicionadas conforme necessário
//     });

//     console.log('MongoDB: Conectado!'); // Exibe uma mensagem de sucesso na conexão
//   } catch (error) {
//     // Captura e exibe qualquer erro que ocorra durante a conexão
//     console.error('MongoDB: Ocorreu um erro na conexão:', error);

//     // Encerra o processo com erro, usando um código de saída diferente de 0
//     process.exit(1); 
//   }
// };

// module.exports = connectDB; // Exporta a função para ser usada em outras partes da aplicação

