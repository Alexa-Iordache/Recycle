const mysql = require("../mysql");

let requests = {
  getRequests(req, res, next) {
    mysql.query(`SELECT * FROM tblCereriColectare;`, (error, result) => {
      if (result.length == 0) {
        res.json({
          id: 1,
          error: "does not exist any requests",
          result: null,
        });
      }

      res.json({ id: 1, error: null, result: result });
    });
  },

  deleteRequest(req, res, next) {
    let id = req.body.params.id;
    console.log(id);
    mysql.query(
      `DELETE FROM tblCereriColectare WHERE CerereID = '${id}';`,
      (err, result) => {
        if (err) {
          throw err;
        }
      }
    );
  },

  addRequest(req, res, next) {
    let startDate = req.body.params.startDate;
    let collectDate = req.body.params.collectDate;
    let phase = req.body.params.phase;

    mysql.query(
      `INSERT INTO tblCereriColectare (Data_cerere, Data_colectare, Etapa)
       VALUES ('${startDate}', '${collectDate}', '${phase}');`,
      (error, result) => {
        if (error) {
          throw err;
        }
      }
    );
  },

  editRequest(req, res, next) {
    let startDate = req.body.params.startDate;
    let collectDate = req.body.params.collectDate;
    let phase = req.body.params.phase;

    mysql.query(
      `UPDATE tblCereriColectare
            SET Data_cerere = '${startDate}', Data_colectare = '${collectDate}', Etapa = '${phase}';`,
      (error, result) => {
        if (error) {
          throw err;
        }
      }
    );
  },
};

module.exports = requests;
