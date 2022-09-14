const db = require("../database");
const { DataTypes } = require("sequelize");


const psicologo = db.define(
  "psicologo",
  {
    psicologo_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING,
    },
    apresentacao: {
      type: DataTypes.INTEGER,
    },
     createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "psicologo",

  }
);

module.exports = psicologo;
