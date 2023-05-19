const { dirname, join } = require("path");
const { fileURLToPath } = require("url");

const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const PORT = 4000

const controllers = require("./controllers");
const verifyToken = require("./middlewares/verifyToken");

const app = express();
console.log(__dirname)

app.use(cors());
app.use(express.json());

app.get("/user", verifyToken, controllers.getUserById);
app.post("/register", controllers.register);
app.post("/login", controllers.login);

app.use("/altavehiculosadicionales", require("./controllers/routes"));
app.use("/altavehiculosadicionales/:id", require("./controllers/routes"));
app.use("/pendientes", require("./controllers/routes"));
app.use("/pendiente/:id", require("./controllers/routes"));

app.listen(PORT, () => {
  console.log(`SERVER FUNCIONANDO EN EL PUERTO ${PORT}`);
  db();
});

app.use(express.static(join(__dirname,'../register-y-login-frontend/build')))

module.exports = app;
