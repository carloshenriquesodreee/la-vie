const express = require("express");
const usuariosController = require("../controller/usuariosController");
const psicologoController = require("../controller/psicologoController")
const pacienteController = require("../controller/pacientesController")
const authController = require("../controller/authController");
const usuarioCreateValidation = require("../validations/usuarios/create");
const authLoginValidation = require("../validations/auth/login");
const auth = require("../middlewares/auth")
const routes = express.Router();

routes.get("/pacientes", pacienteController.listarPaciente);
routes.get("/pacientes/:id", pacienteController.listOne);
routes.post("/new-paciente", pacienteController.registerPacientes)
routes.get("/psicologo", psicologoController.listarPsicologo);
routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);
routes.post("/login", authLoginValidation, authController.login)

module.exports = routes;