const mysql = require("../mysql");

let wasteBin = {
  getWasteBin(req, res, next) {
    mysql.query(`SELECT * FROM tblTomberoane;`, (error, result) => {
      if (result.length == 0) {
        res.json({ id: 1, error: "does not exist patients", result: null });
      }

      res.json({ id: 1, error: null, result: result });
    });
  },

  addWasteBin(req, res, next) {
    let location = req.body.params.location;
    let capacity = req.body.params.capacity;
    let frequency = req.body.params.frequency;
    let type = req.body.params.type;

    mysql.query(
      `INSERT INTO tblTomberoane (Locatie, Capacitate, Frecventa_colectare, Tip_tomberon)
       VALUES ('${location}', '${capacity}', '${frequency}', '${type}');`,
      (error, result) => {
        if (error) {
          throw err;
        }
      }
    );
  },

  deleteWasteBin(req, res, next) {
    let id = req.body.params.id;
    console.log(id);
    mysql.query(
      `DELETE FROM tblTomberoane WHERE ID = '${id}';`,
      (err, result) => {
        if (err) {
          throw err;
        }
      }
    );
  },

  editWasteBin(req, res, next) {
    let id = req.body.params.id;
    let location = req.body.params.location;
    let capacity = req.body.params.capacity;
    let frequency = req.body.params.frequency;
    let type = req.body.params.type;

    mysql.query(
      `UPDATE tblTomberoane
            SET Locatie = '${location}', Capacitate = '${capacity}', Frecventa_colectare = '${frequency}', 
            Tip_tomberon = '${type}'`,
      (error, result) => {
        if (error) {
          throw err;
        }
      }
    );
  },
};

module.exports = wasteBin;
