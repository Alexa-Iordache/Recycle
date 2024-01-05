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

  // editPatient(req, res, next) {
  //   let id = req.body.params.id;
  //   let lastName = req.body.params.lastName;
  //   let firstName = req.body.params.firstName;
  //   let cnp = req.body.params.cnp;
  //   let phoneNumber = req.body.params.phoneNumber;
  //   let email = req.body.params.email;
  //   let membership = req.body.params.membership;
  //   let medicalHistory = req.body.params.medicalHistory;

  //   mysql.query(
  //     `UPDATE Patients
  //           SET LastName = '${lastName}', FirstName = '${firstName}', SSN = '${cnp}', PhoneNumber = '${phoneNumber}',
  //           Email = '${email}', Membership = '${membership}', MedicalHistory = '${medicalHistory}'
  //           WHERE PatientID = '${id}'`,
  //     (error, result) => {
  //       if (error) {
  //         throw err;
  //       }
  //     }
  //   );
  // },
};

module.exports = wasteBin;
