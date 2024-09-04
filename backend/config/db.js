const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lncfilho:lcnfilho123@cluster0.mkkqao8.mongodb.net/e-commerce"
    );
    console.log("MongoDB: Conectado!");
  } catch (error) {
    console.error("MongoDB: erro na conexão:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
