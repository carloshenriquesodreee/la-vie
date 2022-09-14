
const Psicologos = require("../models/psicologos");

const psicologoController = {
  listarPsicologo: async (req, res) => {
    const listPsicologo =  Psicologos.findAll({

      attributes: ["psicologo_id", "nome", "email", "senha", "apresentacao"]
    });

    return res.json(listPsicologo);
  },
};
module.exports = psicologoController;


