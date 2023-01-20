const mysql = require("../mysql");

let appointments = {
  getAppointment(req, res, next) {
    mysql.query(`SELECT * FROM Appointments;`, (error, result) => {
      if (result.length == 0) {
        res.json({
          id: 1,
          error: "does not exist any appointments",
          result: null,
        });
      }

      res.json({ id: 1, error: null, result: result });
    });
  },

  createAppoinmentsTable(req, res, next) {
    mysql.query(
      `SELECT D.LastName as doctorLastName, D.FirstName as doctorFirstName, 
        P.LastName as patientLastName, P.FirstName as patientFirstName, A.Date, A.Hour, 
        A.AppointmentID, L.Street, L.StreetNumber
        FROM Doctors D, Appointments A, Patients P, Locations L
        WHERE D.DoctorID = A.DoctorID AND A.PatientID = P.PatientID AND A.LocationID = L.LocationID;`,

      (error, result) => {
        if (result.length == 0) {
          res.json({
            id: 1,
            error: "does not exist any appointments",
            result: null,
          });
        }
        res.json({ id: 1, error: null, result: result });
      }
    );
  },
};

module.exports = appointments;
