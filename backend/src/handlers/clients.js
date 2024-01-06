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

  // addDoctor(req, res, next) {
  //   let medicalSpeciality = req.body.params.medicalSpeciality;
  //   let lastName = req.body.params.lastName;
  //   let firstName = req.body.params.firstName;
  //   let cnp = req.body.params.cnp;
  //   let birthDate = req.body.params.birthDate;
  //   let sex = req.body.params.sex;
  //   let phoneNumber = req.body.params.phoneNumber;
  //   let email = req.body.params.email;
  //   let county = req.body.params.county;
  //   let city = req.body.params.city;
  //   let street = req.body.params.street;
  //   let streetNumber = req.body.params.streetNumber;
  //   let doctorType = req.body.params.doctorType;
  //   let hiringDate = req.body.params.hiringDate;
  //   let startSchedule = req.body.params.startSchedule;
  //   let endSchedule = req.body.params.endSchedule;

  //   console.log(medicalSpeciality);

  //   mysql.query(
  //     `INSERT INTO Doctors (MedicalSpecialityID, LastName, FirstName, SSN, Sex, 
  //       PhoneNumber, Email, County, City, Street, DoctorType, 
  //       StartSchedule, EndSchedule) 
  //     VALUES ('${medicalSpeciality}', '${lastName}', '${firstName}', '${cnp}',
  //      '${sex}', '${phoneNumber}', '${email}', '${county}', '${city}', '${street}', '${doctorType}', '${startSchedule}', 
  //      '${endSchedule}');`,
  //     (error, result) => {
  //       if (error) {
  //         throw error;
  //       }
  //     }
  //   );
  // },

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
    let name = req.body.params.name;
    let phone = req.body.params.phone;
    let address = req.body.params.address;
    let subscription = req.body.params.subscription;

    mysql.query(
      `UPDATE tblClienti
            SET Nume = '${name}', Telefon = '${phone}', 
            Adresa = '${address}', Tip_abonament = '${subscription}',
            WHERE ClientID = '${id}'`,
      (error, result) => {
        if (error) {
          throw error;
        }
      }
    );
  },
};

module.exports = clients;
