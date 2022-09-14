const paciente = require("../models/pacientes");

const pacienteController = {
  listarPaciente: async (req, res) => {
    const listPacientes = await paciente.findAll({
      attributes: ["paciente_id", "nome", "email", "idade"]
    });

    return res.json(listPacientes);
  },

  listOne: async (req, res) => {
    const { id } = req.params;
    const listarPaciente = await paciente.findByPk(id)

    res.status(200).json(listarPaciente);
  },

  registerPacientes: async (req, res) => {
    const {paciente_id, nome, email, idade} = req.body
    const newPaciente = await paciente.create({
      paciente_id,
      nome,
      email,
      idade
    })
    res.json(newPaciente)
  }

};
module.exports = pacienteController;