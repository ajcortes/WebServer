
const http = require('http');

http.createServer( (req, res) => {

  //Header for a JSON
  // res.writeHead(200, {'Content-Type': 'application/json'});

  //Header for a CSV
  // res.setHeader('Contet-Disposition', 'attachment; filename=test.csv');
  // res.writeHead(200, {'Content-Type': 'application/csv'});

  //Write a CSV file
  // res.write('id, nombre\n');
  // res.write('id, Antonio\n');
  // res.write('id, Victoria\n');
  // res.write('id, Lucas\n');
  // res.write('id, Marcos\n');
  // res.write('id, Cris\n');
  // res.end();

  res.write( 'Hola mundo');

  res.end();

}).listen(8080);

console.log('Listening',8080);