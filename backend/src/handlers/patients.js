const mysql = require('../mysql');

let patients = {
    getPatients(req, res, next) {
        mysql.query(`SELECT * FROM Patients;`, (error, result) => {
            if (result.length == 0) {
                res.json({id: 1, error: 'does not exist patients', result: null});
            }

            res.json({id: 1, error: null, result: result});
        }); 
    },

    addPatient(req, res, next) {
        let id = req.body.id;
        let lastName = req.body.lastName;
        let firstName = req.body.firstName;
        let cnp = req.body.cnp;
        let birthDate = req.body.birthDate;
        let sex = req.body.sex;
        let phoneNumber = req.body.phoneNumber;
        let email = req.body.email;
        let membership = req.body.membership;

        mysql.query(`INSERT INTO Patients (PatientID, LastName, FirstName, SSN, 
            BirthDate, Sex, PhoneNumber, Email, Membership, MedicalHistory) 
            VALUES ('${id}', '${lastName}', '${firstName}', '${cnp}', '${birthDate}','${sex}', 
            '${phoneNumber}', '${email}', '${membership}', 'NU');`, (error, result) => {
            // if (result.length == 0) {
            //     res.json({id: 1, error: 'does not exist patients', result: null});
            // }

            // res.json({id: 1, error: null, result: result});

            if(error){   
                throw err;
            }
            else{
                let data = result;
                console.log(data);
                res.json({error : null, result : result});

            }
        }); 
    },

    deletePatient(req, res, next){
        let id = req.body.id;
        console.log(id);
        mysql.query(`DELETE FROM Patients P WHERE ((P.PatientID = '${id}'));` ,(err, result) =>{
            if(err){   
                throw err;
            }
            else{
                let data = result;
              
                console.log(data);
                res.json({err : null, result : result});

            }
        });
    }
}

module.exports = patients;