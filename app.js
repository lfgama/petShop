const moment = require('moment')
const fs = require('fs');
const nomePetShop = 'Los Dogues';
const nomeArquivo = 'pets.json';
const express = require('express');
const app = express();

let petsJSON = fs.readFileSync(nomeArquivo); //lê o conteúdo do arquivo
let arquivoPets = JSON.parse(petsJSON); //converte para JS

//console.log(arquivoPets.pets);

const atualizarJSON = () => {
    let listaJSON = JSON.stringify(arquivoPets, null, 2);
    fs.writeFileSync(nomeArquivo, listaJSON, 'utf-8'); //arquivo, conteudo novo, formato
}

const adicionarPet = (infoPet) => {
    arquivoPets.pets.push(infoPet);
    atualizarJSON();

    console.log(`${infoPet.nome} está cadastrado no sistema!`);
}

// adicionarPet(
//     {
//             nome: 'Rex',
//             idade: 1,
//             raca: 'Maltês',
//             tipo: 'Cachorro',
//             vacinado: true,
//             genero: 'M',
//             servicos: []
//     }
// );

const listarPets = pets => {
   for (let i = 0; i < pets.length; i++) {
         console.log(`${pets[i].nome}, ${pets[i].idade}, ${pets[i].raca}, ${pets[i].tipo}, ${pets[i].vacinado}, ${pets[i].genero}, ${pets[i].vacinado ? 'vacinado' : 'não vacinado'}`)
         for (let index = 0; index < pets[i].servicos.lenght; index++) {
            console.log(`${pets[i].servicos[index].data} - ${pets[i].servicos[index].nome}`);
        }
    }
    }

listarPets(arquivoPets.pets);

//dar banho

const darBanhoPet = pet => {
    pet.servicos.push({ 
        nome: 'banho',
        data: moment().format('DD-MM-YYYY')
    });
    atualizarJSON();
    console.log(`${pet.nome} está cheiroso`);
}

//desafio 29/03/2021

const tosarPet = pet => {
    pet.servicos.push({ 
        nome: 'tosa',
        data: moment().format('DD-MM-YYYY')
    });
    atualizarJSON();
    console.log(`${pet.nome} está com cabelinho na régua`);
}

const apararUnhasPet = pet => {
    pet.servicos.push({ 
        nome: 'corte de unhas',
        data: moment().format('DD-MM-YYYY')
    });
    atualizarJSON;
    console.log(`${pet.nome}  está de unhas aparadas!`);
}

// console.log(listarPets(pets));

const vacinarPet = pet => {
    if (!pet.vacinado) {
        pet.vacinado == true;
        atualizarJSON();
        console.log(`${pet.nome} foi vacinado com sucesso!`); //está com erro, revisar
    } else {
        console.log(`Ops, ${pet.nome} já está vacinado`);   
    };
}

vacinarPet(arquivoPets.pets[0]);


const campanhaDeVacina = (listaPets) => {
    let totalVacinados = 0;
    for(let i = 0; i < listaPets.length; i++) {
        if (!listaPets[i].vacinado) {
            listaPets[i].vacinado = true;
            totalVacinados++; //ou totalVacinados += 1;
            } 
    }
    atualizarJSON();
    console.log(`Parabéns, ${totalVacinados} pets foram vacinados nessa campanha`);
}

campanhaDeVacina(arquivoPets.pets);

const buscarPet = (nomePet) => {
    const petEncontrado = arquivoPets.pets.find((pet) => {
        return pet.nome == nomePet;
    });
    console.log(petEncontrado);
}

// usando callback

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome} `);
    servico(pet);
    console.log('Até logo!');
}

// adicionando um atributo para um objeto dentro de um array dentro do json

const addInfoCastrado = (listaPets) => {
    listaPetsAtualizada = listaPets.map((pet) =>{
        pet.castrado = true;
        return pet;
    }) 
    arquivoPets.pets = listaPetsAtualizada;
    atualizarJSON();
}
addInfoCastrado(arquivoPets.pets);

const listarVacinados = () => {
    console.log('** VACINADO **');

    let vacinados = arquivoPets.pets.filter((pet) => {
        return pet.nome;
        totalVacinados++;
    });
    console.log(`Temos ${vacinados.length} pets vacinados!`);
}

listarVacinados();


atenderCliente(arquivoPets.pets[0], darBanhoPet);
console.log('-----------');
atenderCliente(arquivoPets.pets[1], tosarPet);
console.log('-----------');
atenderCliente(arquivoPets.pets[2], apararUnhasPet);
console.log('-----------');
atenderCliente(arquivoPets.pets[3], vacinarPet);
buscarPet('pandora');

let gitTeste = true;