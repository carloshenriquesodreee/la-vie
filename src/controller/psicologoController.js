const Psicologos = require("../models/psicologos");
const bcrypt = require('bcryptjs');


const psicologoController = {
  listarPsicologo: async (req, res) => {
    const listPsicologo =  Psicologos.findAll({

      attributes: ["psicologo_id", "nome", "email", "senha", "apresentacao"]
    });

    return res.json(listPsicologo);
  },
    async registro(req, res){
        const {nome, email, senha, apresentacao} = req.body;
    
        novaSenha = bcrypt.hashSync(senha, 10)
    
        const novoPsicologo = await Psicologos.create({
            nome, 
            email,
            senha: novaSenha,
            apresentacao,
        });
    
        return res.status(201).json(novoPsicologo)
    },


};
module.exports = psicologoController;


