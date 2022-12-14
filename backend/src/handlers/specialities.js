const mysql = require('../mysql');


let specialities = {
    getSpeciality(req, res, next) {
        mysql.query(`SELECT * FROM Medical_Specialities;`, (error, result) => {
            if (result.length == 0) {
                res.json({id: 1, error: 'does not exist medical specialities', result: null});
            }

            res.json({id: 1, error: null, result: result});
        }); 
    }
}

module.exports = specialities;