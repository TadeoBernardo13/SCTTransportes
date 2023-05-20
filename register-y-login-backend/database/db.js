const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://l18330435:tadeopassword@clustersct.0noh1pc.mongodb.net/";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB FUNCIONANDO"))
    .catch((error) => console.error(error));
};

module.exports = db;
