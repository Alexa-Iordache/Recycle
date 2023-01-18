const mysql = require('../mysql');


let specialities = {
    getSpeciality(req, res, next) {
        mysql.query(`SELECT * FROM Medical_Specialities;`, (error, result) => {
            if (result.length == 0) {
                res.json({id: 1, error: 'does not exist medical specialities', result: null});
            }

            res.json({id: 1, error: null, result: result});
        }); 
    },

    createSpecialitiesTable(req, res, next) {
        mysql.query(`SELECT S.MedicalSpecialityID, S.Name, S.Description, 
        D.LastName as doctorLastName, D.FirstName as doctorFirstName
        FROM Doctors D, Medical_Specialities S 
        WHERE D.DoctorID = S.DoctorID;`,
        
        (error, result) =>{
            if(result.length == 0){
                res.json({id: 1, error: 'does not exist any medical specialities', result: null});
            }
            res.json({id: 1, error: null, result: result});
    });
    }
}

module.exports = specialities;