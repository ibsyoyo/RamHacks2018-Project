// var http = require('http');
// var fs = require('fs');

// function onRequest(request, response) {
//   response.writeHead(200, {'Content-Type': 'text/html'});
//   fs.readFile('./index.html', null, function(error, data){
//     if (error){
//       response.writeHead(404);
//       response.write('File not found');
//     }
//     else{
//       response.write(data);
//     }
//     response.end();
//   });
// }

// http.createServer(onRequest).listen(9999);

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      query:req.body.query,
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})