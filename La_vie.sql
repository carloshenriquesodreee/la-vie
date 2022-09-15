/*Criando e entrando no database*/
create database la_vie ;
use la_vie;

/*criando as tabelas*/
create table psicologo (
psicologo_id integer not null primary key auto_increment ,  
nome varchar(245) not null,
email varchar(245) not null unique,
senha varchar(245) not null,
apresentacao varchar(245) not null,
createdAt datetime NOT NULL,
updatedAt datetime NOT NULL
);

create table paciente (
paciente_id integer not null primary key auto_increment,  
nome varchar(245) not null,
email varchar(245) not null,
idade date not null
);

create table atendimento (
atendimento_id integer not null primary key auto_increment,
data_atendimento date not null,
observacao varchar(245) not null,
paciente_id integer not null,
constraint fk_paciente foreign key (paciente_id) references paciente(paciente_id)
);

