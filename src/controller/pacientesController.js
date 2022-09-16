const paciente = require("../models/pacientes");

const pacienteController = {
  listarPaciente: async (req, res) => {
    try {
      const listPacientes = await paciente.findAll({
        attributes: ["paciente_id", "nome", "email", "idade"]
      });

      return res.json(listPacientes);
    } catch (error) {
      console.log(error);

      return res
        .status(404)
        .json(
          "erro na consulta, tente novamente mais tarde ou contate o suporte."
        );
    }
  },

  listOne: async (req, res) => {
    try {
      const { id } = req.params;
      const listarPaciente = await paciente.findByPk(id)

      res.status(200).json(listarPaciente);
    } catch (error) {
      console.log(error);

      return res
        .status(404)
        .json(
          "erro ao tentar lista os pacientes, tente novamente mais tarde ou contate o suporte."
        );
    }
  },

  registerPacientes: async (req, res) => {
    try {
      const { paciente_id, nome, email, idade } = req.body
      const newPaciente = await paciente.create({
        paciente_id,
        nome,
        email,
        idade
      })
      res.json(newPaciente);
    } catch (error) {
      console.log(error);
      return res
        .status(404)
        .json(
          "erro ao tentar registra um paciente, tente novamente mais tarde ou contate o suporte."
        );
    }
  },
  async deletarPaciente(req, res) {
    try {
      const { id } = req.params;

      await paciente.destroy(
        {
          where: {
            paciente_id: id
          },
        });
      res.status(204).json("Paciente Deletado");

    } catch (error) {
      console.log(error);
      return res
        .status(404)
        .json(
          "id não encontrado"
        )
    }
  },
  updatePacientes: async (req, res) => {
    try {
      const { id } = req.params;
      const {nome, email, idade } = req.body
      const pacienteAtualizado = await paciente.update(
        {
          nome,
          email,
          idade
        },
        {
          where: {
            paciente_id: id,
          },
        }
      );
      const novoPaciente = await paciente.findByPk(id);

      res.status(200).json(novoPaciente);

    } catch (error) {
      console.log(error);
      return res
        .status(404)
        .json(
          "erro ao tenta atualizar paciente, tente novamente mais tarde ou contate o suporte."
        )
    }
  },
};

module.exports = pacienteController;