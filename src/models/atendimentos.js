const db = require("../database");
const { DataTypes } = require("sequelize");
const Pacientes = require("../models/pacientes")

const atendimento = db.define(
    "atendimento",
    {
      atendimento_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      data_atendimento: {
        type: DataTypes.DATE,
      },
      observacao: {
        type: DataTypes.STRING,
      },
      paciente_id: {
      type: DataTypes.INTEGER,
      references: {
      model: Pacientes,
      key: 'id'
      }
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "atendimento",
    }
  );
  
  module.exports = atendimento;