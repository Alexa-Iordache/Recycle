const mysql = require('../mysql');


let statistics = {
    createDoctorsList(req, res, next) {
        let name = req.body.params.name;

        mysql.query(`SELECT D.LastName, D.FirstName
        FROM Doctors D, Medical_Specialities S
        WHERE D.MedicalSpecialityID = S.MedicalSpecialityID AND S.Name = '${name}'`,

            (error, result) => {
                if (result.length == 0) {
                    res.json({ id: 1, error: 'does not exist any medical specialities', result: null });
                }
                res.json({ id: 1, error: null, result: result });
            });
    },

    getNumberOfAppointmets(req, res, next) {

        mysql.query(`SELECT L.Street, L.StreetNumber, count(A.AppointmentID) as appointmetsNumber
        FROM Appointments A, Locations L 
        WHERE L.LocationID = A.LocationID group by L.Street, L.StreetNumber;`,

            (error, result) => {
                if (result.length == 0) {
                    res.json({ id: 1, error: 'does not exist any appointments in this location', result: null });
                }
                res.json({ id: 1, error: null, result: result });
            });
    },

    getMostRecentDoctors(req, res, next) {

        mysql.query(`SELECT D.LastName, D.FirstName, S.Name, D.HiringDate 
        FROM Doctors D, Medical_Specialities S 
        WHERE S.MedicalSpecialityID = D.MedicalSpecialityID AND D.HiringDate IN 
            (SELECT MAX(D2.HiringDate) 
             FROM Doctors D2 
             WHERE D2.MedicalSpecialityID = D.MedicalSpecialityID 
             GROUP BY D.MedicalSpecialityID) 
        ORDER BY D.HiringDate;`,

            (error, result) => {
                if (result.length == 0) {
                    res.json({ id: 1, error: 'does not exist any appointments in this location', result: null });
                }
                res.json({ id: 1, error: null, result: result });
            });
    },

    getMostExpensiveAppointments(req, res, next) {

        mysql.query(`SELECT A.Appointment_code, A.Price, D.LastName, D.FirstName, S.Name 
        FROM Appointments A, Doctors D, Medical_Specialities S  
        WHERE D.DoctorID = A.DoctorID AND S.MedicalSpecialityID = D.MedicalSpecialityID AND  
         3 > (SELECT COUNT(*) 
              FROM Appointments A2 
              WHERE A.Price < A2.Price) 
        ORDER BY A.Price desc;`,

            (error, result) => {
                if (result.length == 0) {
                    res.json({ id: 1, error: 'does not exist any expensive appointments', result: null });
                }
                res.json({ id: 1, error: null, result: result });
            });
    },

    getMostPatients(req, res, next) {

        mysql.query(`SELECT YEAR(P.BirthDate) as year, COUNT(P.BirthDate) as number
        FROM Patients P 
        GROUP BY year(P.BirthDate) 
        HAVING COUNT(YEAR(P.BirthDate)) >= ALL (
            SELECT COUNT(YEAR(P2.BirthDate)) 
            FROM Patients P2 
            GROUP BY YEAR(P2.BirthDate));`,

            (error, result) => {
                if (result.length == 0) {
                    res.json({ id: 1, error: 'does not exist any patients born in this year', result: null });
                }
                res.json({ id: 1, error: null, result: result });
            });
    },

    createAppointmentsList(req, res, next) {
        let id = req.body.params.id;

        mysql.query(`SELECT A.Appointment_code, A.Price, L.Street, L.StreetNumber 
        FROM Appointments A, Locations L 
        WHERE L.LocationID = A.LocationID AND A.Price > (
            SELECT MAX(A.Price) 
            FROM Appointments A 
            WHERE A.LocationID IN (
                SELECT A.LocationID 
                FROM Appointments A 
                WHERE A.LocationID='${id}'));`,

            (error, result) => {
                if (result.length == 0) {
                    res.json({ id: 1, error: 'does not exist any appointments in this location', result: null });
                }
                res.json({ id: 1, error: null, result: result });
            });
    },
}

module.exports = statistics;