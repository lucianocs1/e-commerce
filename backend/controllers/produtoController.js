const Product = require('../models/produtoModel');
const mongoose = require('mongoose');

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.send(products);
};

const getProductById = async (req, res) => {

  try {
    const { id } = req.params;
    console.log(id);
    // Verifica se o ID é um ObjectId válido


    // Converte a string para ObjectId
    const objectId = new mongoose.Types.ObjectId(parseInt(id));

    const product = await Product.findById(objectId);

    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error('Erro ao buscar o produto:', error);
    res.status(500).json({ message: 'Erro ao buscar o produto' });
  }
};


const getNewCollections = async (req, res) => {
  const products = await Product.find({});
  const arr = products.slice(-8);
  res.send(arr);
};

const getPopularInWomen = async (req, res) => {
  const products = await Product.find({ category: 'roupas' });
  const arr = products.slice(0, 4);
  console.log(arr);
  res.send(arr);
};

const getRelatedProducts = async (req, res) => {
  const { category } = req.body;
  const products = await Product.find({ category });
  const arr = products.slice(0, 4);
  res.send(arr);
};

const addProduct = async (req, res) => {
  const products = await Product.find({});
  const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
  const product = new Product({
    id,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  await product.save();
  res.json({ success: true, name: req.body.name });
};

const removeProduct = async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  res.json({ success: true, name: req.body.name });
};

const editProduto = async (req, res) => {
  try {
      // Obtém o ID do produto a ser editado
      const { id } = req.params;
      // Obtém os dados atualizados do corpo da requisição
      const updatedData = req.body;

      // Se um novo arquivo de imagem for enviado, inclui-o na atualização
      if (req.file) {
          updatedData.image = `${req.file.filename}`;

          // Remove o arquivo de imagem antigo
          const oldProduto = await produtoModel.findById(id);
          if (oldProduto && oldProduto.image) {
              fs.unlink(`uploads/${oldProduto.image}`, (err) => {
                  if (err) console.log(err);
              });
          }
      }

      // Atualiza o produto no banco de dados
      const produto = await ProdutoModel.findByIdAndUpdate(id, updatedData, { new: true });
      if (!produto) {
          return res.json({ success: false, message: "Produto não encontrado" });
      }

      // Responde com sucesso e uma mensagem de confirmação
      res.json({ success: true, message: "Produto atualizado", data: produto });
  } catch (error) {
      // Em caso de erro, loga o erro no console
      console.log(error);
      // Responde com um JSON indicando falha e uma mensagem de erro
      res.json({ success: false, message: "Erro ao atualizar produto" });
  }
};

module.exports = { getAllProducts, getNewCollections, getPopularInWomen, getRelatedProducts, addProduct, removeProduct, editProduto, getProductById};



// const Product = require('../models/productModel'); // Importa o modelo de produto

// const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find({}); // Busca todos os produtos
//     res.send(products); // Envia a lista de produtos como resposta
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao obter produtos', error: error.message });
//   }
// };

// const getNewCollections = async (req, res) => {
//   try {
//     const products = await Product.find({}); // Busca todos os produtos
//     const newCollections = products.slice(-8); // Seleciona os últimos 8 produtos
//     res.send(newCollections); // Envia as novas coleções como resposta
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao obter novas coleções', error: error.message });
//   }
// };

// const getPopularInWomen = async (req, res) => {
//   try {
//     const products = await Product.find({ category: 'roupas' }); // Busca produtos da categoria "roupas"
//     const popularProducts = products.slice(0, 4); // Seleciona os primeiros 4 produtos
//     console.log(popularProducts);
//     res.send(popularProducts); // Envia os produtos populares como resposta
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao obter produtos populares', error: error.message });
//   }
// };

// const getRelatedProducts = async (req, res) => {
//   try {
//     const { category } = req.body; // Extrai a categoria do corpo da requisição
//     const products = await Product.find({ category }); // Busca produtos da categoria especificada
//     const relatedProducts = products.slice(0, 4); // Seleciona os primeiros 4 produtos
//     res.send(relatedProducts); // Envia os produtos relacionados como resposta
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao obter produtos relacionados', error: error.message });
//   }
// };

// const addProduct = async (req, res) => {
//   try {
//     const products = await Product.find({}); // Busca todos os produtos para determinar o ID do novo produto
//     const id = products.length > 0 ? products[products.length - 1].id + 1 : 1; // Gera o ID do novo produto

//     // Cria um novo objeto de produto com os dados fornecidos
//     const product = new Product({
//       id,
//       name: req.body.name,
//       description: req.body.description,
//       image: req.body.image,
//       category: req.body.category,
//       new_price: req.body.new_price,
//       old_price: req.body.old_price,
//     });

//     // Salva o novo produto no banco de dados
//     await product.save();

//     // Responde ao cliente com uma mensagem de sucesso
//     res.json({ success: true, name: req.body.name });
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao adicionar produto', error: error.message });
//   }
// };

// const removeProduct = async (req, res) => {
//   try {
//     await Product.findOneAndDelete({ id: req.body.id }); // Deleta o produto com o ID fornecido
//     res.json({ success: true, name: req.body.name }); // Responde ao cliente com uma mensagem de sucesso
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao remover produto', error: error.message });
//   }
// };

// module.exports = { getAllProducts, getNewCollections, getPopularInWomen, getRelatedProducts, addProduct, removeProduct }; // Exporta as funções para serem usadas em outras partes da aplicação
