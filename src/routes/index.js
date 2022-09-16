const express = require("express");
const psicologoController = require("../controller/psicologoController")
const pacienteController = require("../controller/pacientesController")
const authController = require("../controller/authController");
const psicologoCreateValidation = require("../validations/psicologos/create");
const authLoginValidation = require("../validations/auth/login");
const atendimentoController = require("../controller/atendimentoController");
const auth = require("../middlewares/auth");
const routes = express.Router();

routes.get("/pacientes/:id", pacienteController.listOne);
routes.put("/pacientes/:id", pacienteController.updatePacientes);
routes.get("/pacientes", pacienteController.listarPaciente);
routes.post("/pacientes", pacienteController.registerPacientes);
routes.delete("/pacientes/:id", pacienteController.deletarPaciente);

routes.post("/psicologos", psicologoCreateValidation, psicologoController.novoPsicologo);
routes.get("/psicologos/:id", psicologoController.retornaPsicologoPorId);
routes.put("/psicologos/:id", psicologoController.atualizarPsicologo);
routes.get("/psicologos", psicologoController.listarPsicologos);
routes.delete("/psicologos/:id", psicologoController.deletarPsicologo);


routes.get("/atendimentos", atendimentoController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentoController.listarUmAtendimento);
routes.post("/atendimentos", auth, atendimentoController.cadastrarAtendimento);

routes.post("/login", authLoginValidation, authController.login);

module.exports = routes;