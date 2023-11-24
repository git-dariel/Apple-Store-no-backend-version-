const express = require("express");
const cors = require("cors");
require("dotenv").config();
const getProducts = require("./routers/Connection/apiProducts.js");

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/products", getProducts);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
