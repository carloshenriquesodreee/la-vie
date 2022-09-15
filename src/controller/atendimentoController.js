const Atendimento = require("../models/atendimentos")

const atendimentoController = {

async cadastrarAtendimento(req, res) {

    try {
      const { paciente_id, data_atendimento, observacao } = req.body;
      const cadastrarAtendimento = await Atendimento.create({
        paciente_id,
        data_atendimento,
        observacao,
      });

      if (!cadastrarAtendimento) {
        res.status(400).json("Houve um erro na requisição.");
      } else {
        res.status(201).json(cadastrarAtendimento);
      }
    } catch (error) {
      res.status(400).json({ error });
    }
  }, }

  module.exports = atendimentoController;