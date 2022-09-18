// associar as dependencias instaladas
const express = require("express");

// inicializar app express
const app = express();

// 'END POINT INVALIDO!'

app.get("/", function (req, res) {
  res.send("END POINT INVALIDO!");
});

//todo o url comecado por '/api' chama as rotas em './routes/api'
const api = require("./routes/api");
app.use("/api", api);

let port = 3000;
// servidor a escuta no porto 3000
// 'process.env.port' :caso usemos heroku
app.listen(process.env.port || port, () => {
  console.log("servidor em execucao no porto: " + port);
});

const bodyParser = require("body-parser");

// este middleware deve estar acima das routes-handlers!
app.use(bodyParser.json());
