const sequelize = require("sequelize");
const db = require("../database");

const Pacientes = db.define(
  "Pacientes",
  {
    paciente_id: {
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
    idade: {
      type: sequelize.DataTypes.DATE,
    }
  },
  {
    tableName: "paciente",
    timestamps: false,
  }
);

module.exports = Pacientes;
