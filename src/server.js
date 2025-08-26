import express, {Request, Response} from 'express'
const data = require('../array')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/baralho', (req, res) => {
    return res.send(baralho)
})

	
app.listen(port, () => {
    console.log("Api iniciada na porta: " + port);
});