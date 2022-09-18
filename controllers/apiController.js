exports.test = function (req, res) {
  res.send("ola! teste ao controller");
};
//TODO:listar pontos de interesse da BD
exports.details = function (req, res) {
  res.send({ type: "GET" });
};
// TODO: apagar ponto de interesse
exports.delete = function (req, res) {
  res.send({ type: "DELETE" });
};
// adicionar novo ponto de interesse
exports.create = function (req, res) {
  console.log("you made a post request: ", req.body);
  res.send({
    type: "POST",
    name: req.body.name,
    rank: req.body.rank
  });
};
