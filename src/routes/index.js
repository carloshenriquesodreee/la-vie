const express = require("express");
const psicologoController = require("../controller/psicologoController")
const pacienteController = require("../controller/pacientesController")
const authController = require("../controller/authController");
const psicologoCreateValidation = require("../validations/psicologos/create");
const authLoginValidation = require("../validations/auth/login");
const atendimentoController = require("../controller/atendimentoController")
const auth = require("../middlewares/auth")
const routes = express.Router();

routes.get("/paciente/:id", pacienteController.listOne);
routes.get("/pacientes", pacienteController.listarPaciente);
routes.get("/pacientes/:id", pacienteController.listOne);
routes.post("/pacientes", pacienteController.registerPacientes)
routes.get("/psicologos", psicologoController.listarPsicologo);
routes.post("/psicologos", psicologoCreateValidation, psicologoController.registro);
routes.post("/atendimentos", auth, atendimentoController.cadastrarAtendimento);
routes.post("/login", authLoginValidation, authController.login)

module.exports = routes;