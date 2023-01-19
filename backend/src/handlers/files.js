const mysql = require('../mysql');


let files = {
    getFiles(req, res, next) {
        mysql.query(`SELECT * FROM Medical_Records;`, (error, result) => {
            if (result.length == 0) {
                res.json({id: 1, error: 'does not exist medical records', result: null});
            }

            res.json({id: 1, error: null, result: result});
        }); 
    },

    createFilesTable(req, res, next) {
        mysql.query(`select F.MedicalRecord_code, P.FirstName, P.LastName, F.Results, F.Treatment from Medical_Records F, Patients P where P.PatientID = F.PatientID;`,
        
        (error, result) =>{
            if(result.length == 0){
                res.json({id: 1, error: 'does not exist any medical records', result: null});
            }
            res.json({id: 1, error: null, result: result});
    });
    }
}

module.exports = files;