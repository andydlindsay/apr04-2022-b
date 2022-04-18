# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware


http://www.lighthouselabs.com
tiny.url/dashsd 
140 chars

http://localhost:8080/u/iiohb5

### Web Servers
* speak HTTP (for the most part)
* TCP is low-level connection between machines (highway)
* HTTP sits on top of TCP

* TCP - send info whenever we want (either party)
  * IP address (localhost)
  * Port (65,535)
* HTTP - request/response cycle (trucks carrying info)
  * Request
    * Verb/Method - what we want to do
      * `GET` - I would like to retrieve informatiom from a server
      * `POST` - I want to send info to the server
    * Path/URL/endpoint - what we want to do it to
      * `/users`, `/videos`
      * http://localhost:8001  /urls.json
      * http://localhost:8001  /urls.html
      * http://localhost:8001  /urls.xml
      * http://localhost:8001  /urls
  * Response
    * May or may not contain information
    * has to have a status code http.cat


                              request
Client <==== http / tcp ====> Server



```js
// TCP
server.on('connection', (connection) => {
  connection.write('hello');
});

// HTTP
server.on('request', (request, response) => {
  response.write('hello there');
  response.end();
});
```
https://coffee-break-time.surge.sh/?time=600&type=naan

req.query.type === 'naan'

app.get('/urls/new', (req, res) => {
  const shortURL = req.params.shortURL; // key

  const templateVars = {
    shortURL: req.params.shortURL, 
    longURL: urlDatabase // object
  }
});

app.get('/urls/abasba', (req, res) => {});

```js
console.log(req.params);
```

```js
app.post('/login', (req, res) => {
  if (!req.body.username) {
    return res.send('no username was provided');
  }

  // retrieves the user based on their username
  // compares their password
  // responds 
});
```

### Middleware
* sits/runs between the request and the response
* usually used for parsing or authentication

                                                                            request
Client <==== http / tcp ====> Server Middleware     Middleware Middleware RouteHandler
                                    parse cookies   parse body  logger


username=jstamos&password=1234 // url encoded

{
  "username": "jstamos",
  "password": "1234"
} // JSON

