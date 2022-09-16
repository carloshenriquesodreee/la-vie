const Psicologos = require("../models/psicologos");
const bcrypt = require('bcryptjs');
const psicologo = require("../models/psicologos");
const psicologoController = {
  listarPsicologos: async (req, res) => {
    try {
    const listPsicologos =  await Psicologos.findAll({
      attributes: ["psicologo_id", "nome", "email", "senha", "apresentacao"]
    });
    return res.status(200).json(listPsicologos);
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json(
        "erro na consulta, tente novamente mais tarde ou contate o suporte."
      );
  }},
   retornaPsicologoPorId: async (req, res) => {
    try {
      const {id} = req.params;
      const psicologoPorId = await psicologo.findByPk(id,
        {
          attributes: {
             exclude: ['senha']
          }
        })
      if(psicologoPorId === null){
        return res.status(404).json({"error" : "ID não encontrado", status:"404"});
      }
      res.status(200).json(psicologoPorId);
      } catch (error) {
        return res.status(500).json({"error" : error.message , status:"500"});
      }
    },
    async novoPsicologo(req, res){
      try{
        const {nome, email, senha, apresentacao} = req.body;
        if(!nome && !email && !senha && !apresentacao){
          return res.status(400).json({"error" : "Todos os campos são obrigatórios", status:"400"});
        }
        novaSenha = bcrypt.hashSync(senha, 10)
        const novoPsicologos = await Psicologos.create({
          nome,
          email,
          senha: novaSenha,
          apresentacao,
        });
        const result = {id: novoPsicologos.psicologo_id, nome: novoPsicologos.nome, email: novoPsicologos.email, apresentacao: novoPsicologos.apresentacao};
        return res.status(201).json(result);
      }catch(error){
        return res.status(500).json({"error" : error.message , status:"500"});
      }
    },
    async atualizarPsicologo(req, res){
      try{
        const {id} = req.params;
        const {nome, email, senha, apresentacao} = req.body;
        if(!nome && !email && !senha && !apresentacao){
          return res.status(400).json({"error" : "Todos os campos são obrigatórios", status:"400"});
        }
        novaSenha = bcrypt.hashSync(senha, 10)
        const psicologoAtualizado = await Psicologos.update({
            nome,
            email,
            senha: novaSenha,
            apresentacao,
          },
          {
            where: {psicologo_id: id}
          },
        );
        const result = {
          id: id,
          nome: nome,
          email: email,
          apresentacao: apresentacao
        };
        return res.status(201).json(result);
      }catch(error){
        return res.status(500).json({"error" : error.message , status:"500"});
      }
    },
    async deletarPsicologo(req, res){
      try{
        const {id} = req.params;
        if(!id){
          return res.status(400).json({"error" : "Id obrigatório", status:"400"});
        }
         await Psicologos.destroy(
          {
            where: {psicologo_id: id}
          },
        );
        return res.status(204).send();
      }catch(error){
        return res.status(404).json({"error" : "ID não encontrado" , status:"404"});
      }
    },
};
module.exports = psicologoController;


