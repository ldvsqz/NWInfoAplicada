const db_conection = require('../config/database.js');

exports.login = (req, res) => {
 db_conection.sql.connect(db_conection.config, function (err) {
    if (err) {
        console.log(err);
    }else{
            var {Usuario, pass} = req.body;
            console.log(Usuario, pass);
            var request = new db_conection.sql.Request();
            request.query(`EXEC [dbo].[spLogin] @usuario = N'${Usuario}', @pass = N'${pass}'`,
            //request.query(`SELECT * FROM USUARIOS WHERE USUARIOS.USUARIO = N'${Usuario}' and USUARIOS.PASS = N'${pass}'`,
            function (err, result) {
                if (err) {
                    console.log(err);
                }else{
                    res.json(result.recordsets[0]);
                    console.log(result.recordsets[0]);
                }
            });
        }
    }); 
};

exports.getAll = (req, res) => {
    db_conection.sql.connect(db_conection.config, function (err) {
       console.log(req.body);
       if (err) {
           console.log(err);
       }else{
               var request = new db_conection.sql.Request();
               request.query(`SELECT * FROM USUARIOS`,
               function (err, result) {
                   if (err) {
                       console.log(err);
                   }else{
                        res.json(result.recordsets[0]);
                   }
               });
           }
       }); 
   };