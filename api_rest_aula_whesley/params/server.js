const express = require('express');

const app = express();


//Query Params = ?nomw=Whesley
app.get('/users', (req, res)=>{
    const nome = req.query.nome;  //OU  const {nome} = req.query;
    res.json({nome: `${nome}`})
});


//Route Params = http://localhost:3000/contato/:id
app.get('/contato/:id', (req,res)=>{
    const id = req.params.id;   //OU  const {id} = req.params;
    res.json({id: `${id}`})
});

app.listen(3000);


//Resquest body = {"id":1} - esse foi esudado na outra aula de 1h.