const Sequelize = require("sequelize");

const DB_NAME = "la_vie";
const DB_USER = "root";
const DB_PASS = "";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
};

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.log(error);
  console.error("Error ao tentar uma conexão com banco de dados");
}

async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco de dados conectado!");
  } catch (error) {
    console.log(error);
    console.error("Erro ao tentar se conectar ao banco de dados");
  }
}

Object.assign(db, {
  hasConection,
});

module.exports = db;