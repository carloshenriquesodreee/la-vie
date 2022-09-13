const express = require("express");
const usuariosController = require("../controller/usuariosController");
const authController = require("../controller/authController");
const usuarioCreateValidation = require("../validations/usuarios/create");
const authLoginValidation = require("../validations/auth/login");
const auth = require("../middlewares/auth")
const routes = express.Router();

routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);
routes.post("/login", authLoginValidation, authController.login)

module.exports = routes;