# W03D03 - HTTP Cookies & User Authentication

### To Do
- [x] HTTP and cookies
- [x] Render pages differently based on language preference
- [x] Register user with email and password

### HTTP
* request/response cycle
* request contains a verb and a path (GET /urls)
* response must contain a status code; may or may not contain a body
* stateless protocol; neither the server nor the client HAVE to remember any previous communication

* security (tomorrow)

### Cookies
* preserve info between requests in the browser (client)
* key/value pairs
* all cookies are sent with every request for a particular domain




```js
const cookies = {
  language: 'ko'
};

delete cookies.language

cookies.language = 'es';
cookies.language = 'es';
cookies.language = 'es';
cookies.language = 'es';
```

email=a%40a.com&password=1234 // url-encoding


Register - cookie - home
Register - login - cookie - home


1. Make it work
2. Make it pretty
3. Make it fast



