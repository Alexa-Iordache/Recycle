const mysql = require("../mysql");

let patients = {
  getPatients(req, res, next) {
    mysql.query(`SELECT * FROM Patients;`, (error, result) => {
      if (result.length == 0) {
        res.json({ id: 1, error: "does not exist patients", result: null });
      }

      res.json({ id: 1, error: null, result: result });
    });
  },

  addPatient(req, res, next) {
    let lastName = req.body.params.lastName;
    let firstName = req.body.params.firstName;
    let cnp = req.body.params.cnp;
    let birthDate = req.body.params.birthDate;
    let sex = req.body.params.sex;
    let phoneNumber = req.body.params.phoneNumber;
    let email = req.body.params.email;
    let membership = req.body.params.membership;
    let medicalHistory = req.body.params.medicalHistory;

    mysql.query(
      `INSERT INTO Patients (LastName, FirstName, SSN, 
            BirthDate, Sex, PhoneNumber, Email, Membership, MedicalHistory) 
            VALUES ('${lastName}', '${firstName}', '${cnp}', '${birthDate}','${sex}', 
            '${phoneNumber}', '${email}', '${membership}', '${medicalHistory}');`,
      (error, result) => {
        if (error) {
          throw err;
        }
      }
    );
  },

  deletePatient(req, res, next) {
    let id = req.body.params.id;
    console.log("a intrat in be");
    console.log(id);
    mysql.query(
      `DELETE FROM Patients P WHERE ((P.PatientID = '${id}'));`,
      (err, result) => {
        if (err) {
          throw err;
        }
      }
    );
  },

  editPatient(req, res, next) {
    let id = req.body.params.id;
    let lastName = req.body.params.lastName;
    let firstName = req.body.params.firstName;
    let cnp = req.body.params.cnp;
    let phoneNumber = req.body.params.phoneNumber;
    let email = req.body.params.email;
    let membership = req.body.params.membership;
    let medicalHistory = req.body.params.medicalHistory;

    mysql.query(
      `UPDATE Patients
            SET LastName = '${lastName}', FirstName = '${firstName}', SSN = '${cnp}', PhoneNumber = '${phoneNumber}',
            Email = '${email}', Membership = '${membership}', MedicalHistory = '${medicalHistory}'
            WHERE PatientID = '${id}'`,
      (error, result) => {
        if (error) {
          throw err;
        }
      }
    );
  },
};

module.exports = patients;
