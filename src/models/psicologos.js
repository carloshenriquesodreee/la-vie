const sequelize = require("sequelize");
const db = require("../database");

const psicologo = db.define(
  "psicologo",
  {
    psicologo_id: {
      type: sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: sequelize.DataTypes.STRING,
    },
    email: {
      type: sequelize.DataTypes.STRING,
    },
    senha: {
      type: sequelize.DataTypes.STRING,
    },
    apresentacao: {
      type: sequelize.DataTypes.INTEGER,
    },
  },
  {
    tableName: "psicologo",
    timestamps: false,
  }
);

module.exports = psicologo;
