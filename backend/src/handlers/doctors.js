const mysql = require("../mysql");

let doctors = {
  getDoctor(req, res, next) {
    mysql.query(`SELECT * FROM Doctors;`, (error, result) => {
      if (result.length == 0) {
        res.json({ id: 1, error: "does not exist doctors", result: null });
      }

      res.json({ id: 1, error: null, result: result });
    });
  },

  createDoctorsTable(req, res, next) {
    mysql.query(
      `SELECT D.DoctorID, D.LastName, D.FirstName, D.DoctorType, 
        D.PhoneNumber, D.Email, S.Name
        FROM Doctors D, Medical_Specialities S 
        WHERE D.MedicalSpecialityID = S.MedicalSpecialityID;`,

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

  addDoctor(req, res, next) {
    let medicalSpeciality = req.body.params.medicalSpeciality;
    let lastName = req.body.params.lastName;
    let firstName = req.body.params.firstName;
    let cnp = req.body.params.cnp;
    let birthDate = req.body.params.birthDate;
    let sex = req.body.params.sex;
    let phoneNumber = req.body.params.phoneNumber;
    let email = req.body.params.email;
    let county = req.body.params.county;
    let city = req.body.params.city;
    let street = req.body.params.street;
    let streetNumber = req.body.params.streetNumber;
    let doctorType = req.body.params.doctorType;
    let hiringDate = req.body.params.hiringDate;
    let startSchedule = req.body.params.startSchedule;
    let endSchedule = req.body.params.endSchedule;

    mysql.query(
      `INSERT INTO Doctors (MedicalSpecialityID, LastName, FirstName, SSN, 
            BirthDate, Sex, PhoneNumber, Email, County, City, Street, StreetNumber, 
            DoctorType, HiringDate, StartSchedule, EndSchedule) values 
            ('${medicalSpeciality}', '${lastName}', '${firstName}', '${cnp}', '${birthDate}', 
            '${sex}', '${phoneNumber}', '${email}', '${county}', '${city}', '${street}', 
            '${streetNumber}', '${doctorType}', '${hiringDate}', '${startSchedule}', '${endSchedule}');
        `,
      (error, result) => {
        if (error) {
          throw err;
        }
      }
    );
  },

  deleteDoctor(req, res, next) {
    let id = req.body.params.id;
    console.log("a intrat in be");
    console.log(id);
    mysql.query(
      `DELETE FROM Doctors D WHERE ((D.DoctorID = '${id}'));`,
      (err, result) => {
        if (err) {
          throw err;
        }
      }
    );
  },

  editDoctor(req, res, next) {
    let id = req.body.params.id;
    let medicalSpecialityID = req.body.params.medicalSpecialityID;
    let lastName = req.body.params.lastName;
    let firstName = req.body.params.firstName;
    let phoneNumber = req.body.params.phoneNumber;
    let email = req.body.params.email;
    let doctorType = req.body.params.doctorType;

    mysql.query(
      `UPDATE Doctors
            SET MedicalSpecialityID = '${medicalSpecialityID}', LastName = '${lastName}', 
            FirstName = '${firstName}', PhoneNumber = '${phoneNumber}',
            Email = '${email}', DoctorType = '${doctorType}'
            WHERE DoctorID = '${id}'`,
      (error, result) => {
        if (error) {
          throw err;
        }
      }
    );
  },
};

module.exports = doctors;
