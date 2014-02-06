var express = require('express');
var mysql = require('mysql');
 
var client = mysql.createConnection({
  user: 'nodejs1',
  password: '03885536',
  host: '127.0.0.1',
  port: '3306',
  database: 'nodejs1'
});
var app = express();
client.connect(function(err) {
    if ( !err ) {
      console.log("Connected to MySQL");
    } else if ( err ) {
      console.log(err);
    }
  });

app.use(express.bodyParser());


app.get('/pilotos',function(req, res){
  console.log("PILOTOS");
  
   
  client.query(
      'SELECT * FROM usuarios',
      function selectUsuario(err, results, fields) {
   
        if (err) {
            console.log("Error: " + err.message);
          
        }else{     
          //client.end();
          res.json(results);
        }
      } 
  );
});
app.get('/piloto/:id',function(req, res){
  console.log("PILOTO "+req.params.id);
  
  console.log("query");
  client.query(
      'SELECT * FROM usuarios where id=?', [req.params.id],
      function selectUsuario(err, results, fields) {
        if (err) {
          console.log("Error: " + err.message);
        }else{
          //client.end();
          res.json(results);
        }

      }
  );
  //client.end();
});

app.listen(3434);