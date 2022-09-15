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
routes.put("/pacientes", pacienteController.updatePacientes);
routes.get("/pacientes", pacienteController.listarPaciente);
routes.post("/novo-paciente", pacienteController.registerPacientes);
routes.delete("/deleta/:id/paciente", pacienteController.deletarPaciente);
routes.get("/psicologos", psicologoController.listarPsicologo);
routes.post("/psicologos", psicologoCreateValidation, psicologoController.registro);
routes.post("/atendimentos", auth, atendimentoController.cadastrarAtendimento);
routes.post("/login", authLoginValidation, authController.login)

module.exports = routes;