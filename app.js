const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


require('./models/Metas');
const Meta = mongoose.model('Meta');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
})

mongoose.connect('mongodb://localhost/appBd',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(
        () => {
            console.log("Conexão ao banco mongoBD realizada com sucesso!!")
        }
    )
    .catch(
        (err) => {
            console.log("Error: Conexão com MongoDB falhou..: " + err)
        }
    );


app.get('/', async (req, res) => {
    return res.json({ teste: 'Hello World' });
});


app.get('/metas', async (req, res) => {
    await Meta.find({}).then((metas) => {
        return res.json({
            error: false,
            metas
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum registro encontrado!"
        });
    });

});

app.post('/metas', async (req, res) => {
    await Meta.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Meta Nao Cadastrar com Sucesso!!"
        });
    });
    return res.json({
        error: false,
        message: "Meta cadastrada com sucesso!!"
    });
});

app.listen(3535, () => {
    console.log('SERVIDOR INICIADO NA PORTA 3535')
});