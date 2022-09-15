const Psicologos =  require("./psicologos");
const Pacientes = require("./pacientes");
const Atendimentos = require("./atendimentos")

Atendimentos.belongsTo(Psicologos,{
foreignKey: 'psicologo_id'
});
Psicologos.hasMany(Atendimentos,{
foreignKey: 'atendimento_id'
});
Atendimentos.belongsTo( Pacientes, {
foreignKey: 'paciente_id'
});
Pacientes.hasMany(Atendimentos,{
foreignKey: 'atendimento_id'
});

module.exports = {
Psicologos,
Pacientes,
Atendimentos
}