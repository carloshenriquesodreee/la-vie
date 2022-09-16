const Psicologos = require("../models/psicologos");
const bcrypt = require('bcryptjs');


const psicologoController = {

  listarPsicologo: async (req, res) => {
      try {
        const listPsicologos = await Psicologos.findAll({
          attributes: ["psicologo_id", "nome", "email", "apresentacao"]
        });
  
        return res.status(200).json(listPsicologos);

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
      const listarPsicologo = await Psicologos.findByPk(id)

      res.status(200).json(listarPsicologo);
    } catch (error) {
      console.log(error);

      return res
        .status(404)
        .json(
          "id não encontrado"
        );
    }
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

    async deletarPsicologo(req, res) {
      try {
        const { id } = req.params;
  
        await Psicologos.destroy(
          {
            where: {
              psicologo_id: id
            },
          });
        res.status(204).json("Psicologo Deletado");
  
      } catch (error) {
        console.log(error);
        return res
          .status(404)
          .json(
            "erro ao deletar um paciente, tente novamente mais tarde ou contate o suporte."
          )
      }
    },

    updatePsicologo: async (req, res) => {
      try {
        const { id } = req.params;
        const {nome, email, senha, apresentacao } = req.body;

        novaSenha = bcrypt.hashSync(senha, 10)

        const psicologoAtualizado = await Psicologos.update(
          {
            nome,
            email,
            senha: novaSenha,
            apresentacao
          },
          {
            where: {
              psicologo_id: id,
            },
          }
        );
        const novoPsicologo = await Psicologos.findByPk(id);
  
        res.status(200).json(novoPsicologo);
        
      } catch (error) {
        console.log(error);
        return res
          .status(400)
          .json(
            "id não encontrado"
          )
      }
    },
  };


module.exports = psicologoController;


