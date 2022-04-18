const http = require('http');
const port = 8001;

const server = http.createServer();

// listen for incoming requests
server.on('request', (request, response) => {
  console.log('a request has come in!!!');

  console.log('request method', request.method); // GET
  console.log('request url', request.url);

  if (request.url === '/about') {
    response.write('<h1>this is the about page</h1>'); // adds info to the envelope
  } else if (request.url === '/products') {
    response.write('all the products in the database');
  } else {
    response.statusCode = 404;
    response.write('this is not the page you are looking for');
  }

  response.end(); // sends the envelope
});

server.listen(port, () => {
  console.log(`the server is listening on port ${port}`);
});
