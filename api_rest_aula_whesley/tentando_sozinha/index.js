const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let listaFuncionarios = fs.readFileSync('./funcionarios.json');
let funcio = JSON.parse(listaFuncionarios);



// ___rota-01_______________________________________

app.get('/funcionario', (req, res) => {
    res.json(funcio);
});


// ___rota-02_______________________________________

app.post('/funcionario', (req, res) => {
    const funcionario = req.body;
    if (Array.isArray(funcionario)) {
        for (item of funcionario) {
            funcio.push(item);
        }
    }
    else {
        funcio.push(funcionario);
    }
    let jsonList = JSON.stringify(funcio);
    fs.writeFile('funcionarios.json', jsonList, 'utf8', () => { });
    res.send('Novo funcionario cadastrado com sucesso!');
});


// ___rota-03_______________________________________

// app.get('/funcionario/:idDaEmpresa', (req, res) => {

//     const idDaEmpresa = req.params.idDaEmpresa;
//     let funcionarios = []
//     for (let funcionario of funcio) {
//         if (funcionario.idDaEmpresa == idDaEmpresa) {
//             funcionarios.push(funcionario)

//         }       
//     }
//     if(funcionarios.length == 0){
//         res.status(404).send('Funcionario não encontrado!');
//     }
    
//     res.json(funcionario);
//     return;
// });


// ___rota-04_______________________________________

app.get('/funcionario/:idade', (req, res) => {

    const idade = req.params.idade;
    let funcionarios = [];
    for (let funcionario of funcio) {
        if (funcionario.idade == idade) {
            funcionarios.push(funcionario);
            // console.log(funcionarios);
        }
    }
    if (funcionarios.length == 0) {
        res.status(404).send("Funcionário não encontrado!");
    }
    res.json(funcionarios);
    return;
});



app.listen(3000);



