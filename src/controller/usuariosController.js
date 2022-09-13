const { Usuarios} = require("../models")
const bcrypt = require('bcryptjs')

const UsuariosController = {
async registro(req, res){
    const {nome, email, senha} = req.body;

    novaSenha = bcrypt.hashSync(senha, 10)

    const novoUsuario = await Usuarios.create({
        nome, 
        email,
        senha: novaSenha
    });

    return res.status(201).json(novoUsuario)
},
};

module.exports = UsuariosController;