const mysql = require('../mysql');


let doctors = {
    getDoctor(req, res, next) {
        mysql.query(`SELECT * FROM Doctors;`, (error, result) => {
            if (result.length == 0) {
                res.json({id: 1, error: 'does not exist doctors', result: null});
            }

            res.json({id: 1, error: null, result: result});
        }); 
    },

    createDoctorsTable(req, res, next) {
        mysql.query(`SELECT D.DoctorID, D.LastName, D.FirstName, D.DoctorType, 
        D.PhoneNumber, D.Email, S.Name
        FROM Doctors D, Medical_Specialities S 
        WHERE D.MedicalSpecialityID = S.MedicalSpecialityID;`,
        
        (error, result) =>{
            if(result.length == 0){
                res.json({id: 1, error: 'does not exist any appointments', result: null});
            }
            res.json({id: 1, error: null, result: result});
    });
    }
}

module.exports = doctors;