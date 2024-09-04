const express = require("express");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const produtoRoutes = require("./routes/produtoRoutes");
const carrinhoRoutes = require("./routes/carrinhoRoutes");

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage });

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `/images/${req.file.filename}`,
  });
});

app.use("/images", express.static("upload/images"));

app.use(authRoutes);
app.use(produtoRoutes);
app.use(carrinhoRoutes);

app.listen(port, (error) => {
  if (!error) console.log(`Server rodando na porta: ${port}`);
  else console.log("Error:", error);
});
