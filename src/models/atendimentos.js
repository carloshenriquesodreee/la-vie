const db = require("../database");
const { DataTypes } = require("sequelize");
const Pacientes = require("../models/pacientes");
const Psicologos = require("../models/psicologos");

const Atendimentos = db.define(
    "Atendimentos",
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
      psicologo_id: {
      type: DataTypes.INTEGER,
      references: {
      model: Psicologos,
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
  
  module.exports = Atendimentos;