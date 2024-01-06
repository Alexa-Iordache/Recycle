const { subscribe } = require("../api");
const mysql = require("../mysql");

let clients = {
  getClients(req, res, next) {
    mysql.query(`SELECT * FROM tblClients;`, (error, result) => {
      if (result.length == 0) {
        res.json({ id: 1, error: "does not exist clients", result: null });
      }

      res.json({ id: 1, error: null, result: result });
    });
  },

  createClientsTable(req, res, next) {
    mysql.query(
      `SELECT C.ClientID, C.Nume, C.Telefon, C.Adresa, 
        A.Tip_abonament 
        FROM tblClienti C, tblAbonament A 
        WHERE C.id_abonament = A.idAbonament;`,

      (error, result) => {
        if (result.length == 0) {
          res.json({
            id: 1,
            error: "does not exist any clients",
            result: null,
          });
        }
        res.json({ id: 1, error: null, result: result });
      }
    );
  },

  addClient1(req, res, next) {
    let subscription_type = req.body.params.subscription_type;
    let subscription_amount = req.body.params.subscription_amount;
    let subscription_time = req.body.params.subscription_time;
    let subscription_startDate = req.body.params.subscription_startDate;
    let subscription_endDate = req.body.params.subscription_endDate;

    mysql.query(
      // `INSERT INTO tblAbonament (Tip_abonament, Pret_lunar, Perioada_abonament, 
      //   Data_incepere, Data_expirare)
      //  VALUES ('${subscription_type}', ${subscription_amount}, '${subscription_time}', 
      //  '${subscription_startDate}', '${subscription_endDate}');`,
      `INSERT INTO tblAbonament (Tip_abonament, Pret_lunar, Perioada_abonament, Data_incepere, Data_expirare)
      VALUES ('${subscription_type}', ${subscription_amount}, '${subscription_time}', 
      '${subscription_startDate}', '${subscription_endDate}');`,
      (error, result) => {
        if (error) {
          throw error;
        }
      }
    );
  },

  addClient2(req, res, next) {
    mysql.query(
      `SET @lastAbonamentId = LAST_INSERT_ID();`,
      (error, result) => {
        if (error) {
          throw error;
        }
      }
    );
  },

  addClient3(req, res, next) {
    let name = req.body.params.name;
    let phone = req.body.params.phone;
    let address = req.body.params.address;
    let email = req.body.params.email;

    mysql.query(
      // `INSERT INTO tblClienti (Nume, Telefon, Adresa, Email, id_abonament)
      // VALUES ('${name}', '${phone}', '${address}', '${email}', @lastAbonamentId);`,
      `INSERT INTO tblClienti (Nume, Telefon, Adresa, Email, id_abonament)
      VALUES ('${name}', '${phone}', '${address}', '${email}', @lastAbonamentId);`,
      (error, result) => {
        if (error) {
          throw error;
        }
      }
    );
  },

  deleteClient(req, res, next) {
    let id = req.body.params.id;
    console.log(id);
    mysql.query(
      `DELETE FROM tblClienti WHERE ClientID = '${id}';`,
      (error, result) => {
        if (error) {
          throw error;
        }
      }
    );
  },

  editClient(req, res, next) {
    let id = req.body.params.id;
    let subscription = req.body.params.subscription;

    mysql.query(
      `UPDATE tblClienti AS C
      INNER JOIN tblAbonament AS A ON C.id_abonament = A.idAbonament
      SET C.id_abonament = (
          SELECT idAbonament
          FROM tblAbonament
          WHERE Tip_abonament = '${subscription}' AND A.idAbonament = C.id_abonament
          LIMIT 1
      )
      WHERE C.ClientID = ${id};`,
      (error, result) => {
        if (error) {
          throw error;
        }
      }
    );
  },

  editClient2(req, res, next) {
    let id = req.body.params.id;
    let name = req.body.params.name;
    let phone = req.body.params.phone;
    let address = req.body.params.address;

    mysql.query(
      `UPDATE tblClienti AS C INNER JOIN tblAbonament AS A 
    ON C.id_abonament = A.idAbonament
    SET C.Nume = '${name}', C.Telefon = '${phone}', C.Adresa = '${address}'
    WHERE C.ClientID = ${id};`,
      (error, result) => {
        if (error) {
          throw error;
        }
      }
    );
  },

  editClient3(req, res, next) {
    let id = req.body.params.id;
    let subscription = req.body.params.subscription;

    mysql.query(
      `UPDATE tblAbonament AS A INNER JOIN tblClienti AS C 
      ON A.idAbonament = C.id_abonament
      SET A.Tip_abonament = '${subscription}'
      WHERE C.ClientID = ${id}
      LIMIT 1;`,
      (error, result) => {
        if (error) {
          throw error;
        }
      }
    );
  },
};

module.exports = clients;
