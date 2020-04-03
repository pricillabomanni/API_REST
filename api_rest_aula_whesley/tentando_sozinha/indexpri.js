const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let listaFuncionarios =  fs.readFileSync('./funcionarios.json');
let funcio = JSON.parse(listaFuncionarios);


app.get('/funcionario', (req, res)=>{
    res.json(funcio);
});

app.post('/funcionario', (req,res) =>{
    const funcionario = req.body;
    if(Array.isArray(funcionario)){
        for (item of funcionario){
            funcio.push(item);
        }
    }
    else{
        funcio.push(funcionario);
    }
    let jsonList = JSON.stringify(funcio);
    fs.writeFile('funcionarios.json', jsonList, 'utf8', ()=>{});
    res.send('Novo funcionario cadastrado com sucesso!');
});

// app.get('/funcionario/:idDaEmpresa',(req,res)=>{

//     const idDaEmpresa = req.params.idDaEmpresa;
//     for(let funcionario of funcio){
//         if(funcionario.idDaEmpresa === idDaEmpresa){

//             res.json(funcionario);
//             return;
//         }
//     }

//     res.status(404).send('Funcionario não encontrado!');
// });

app.get('/funcionario/:idade',(req,res)=>{

    const idade = req.params.idade;
    for(let funcionario of funcio){
        if(funcionario.idade == idade){

            res.json(funcionario);
            return;
        }
    }

    res.status(404).send('Funcionario não encontrado!');
});

app.listen(3000);