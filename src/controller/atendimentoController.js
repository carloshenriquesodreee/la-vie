const { Atendimentos, Pacientes, Psicologos } = require("../models");

const atendimentosController = {
  
  listarAtendimentos: async (req, res) => {
  
    try{
    const listaAtendimentos = await Atendimentos.findAll({
      include: [{model: Psicologos},
    ],});

    return res.status(200).json(listaAtendimentos)
  } catch(error){
    console.log(error);
    return res
    .status(404)
    .json("Ocorreu algum erro, tente novamente mais tarde ou contate o suporte")
  };
  },

  listarUmAtendimento: async (req, res) => {
    try {
      const { id } = req.params;
      const listarAtendimento = await Atendimentos.findByPk(id)

      res.status(200).json(listarAtendimento);
    } catch (error) {
      console.log(error);

      return res
        .status(404)
        .json(
          "id não encontrado"
        );
    };
  },

  cadastrarAtendimento: async (req, res) => {
    console.log(req.auth);

    const { data_atendimento, observacao, psicologo_id, paciente_id } = req.body; 
    try {
      const novoAtendimento = await Atendimentos.create({
        data_atendimento,
        observacao,
        psicologo_id,
        paciente_id
      });
      res.status(201).json(novoAtendimento);
    } catch (error) {
      console.error(error);
    };
  },
};

module.exports = atendimentosController;