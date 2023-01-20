const mysql = require("../mysql");

let locations = {
  getLocation(req, res, next) {
    mysql.query(`SELECT * FROM Locations;`, (error, result) => {
      if (result.length == 0) {
        res.json({ id: 1, error: "does not exist locations", result: null });
      }

      res.json({ id: 1, error: null, result: result });
    });
  },
};

module.exports = locations;
