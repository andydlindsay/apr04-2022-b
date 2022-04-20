const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const languages = require('./languages.json');
// console.log(languages);

const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev')); // (req, res, next)
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.set('view engine', 'ejs');

const users = {};

// GET /home
app.get('/home', (req, res) => {
  const languageChoice = req.cookies.language || 'ko';

  const templateVars = {
    heading: languages.homeHeadings[languageChoice],
    body: languages.homeBodies[languageChoice]
  };

  res.render('home', templateVars);
});

// GET /about
app.get('/about', (req, res) => {
  const languageChoice = req.cookies.language;

  const templateVars = {
    heading: languages.aboutHeadings[languageChoice],
    body: languages.aboutBodies[languageChoice]
  };

  res.render('about', templateVars);
});

// GET /language-choice/:language
app.get('/language-choice/:language', (req, res) => {
  // set a cookie
  res.cookie('language', req.params.language);

  // redirect the user
  res.redirect('/home');
});

// GET /register
app.get('/register', (req, res) => {
  res.render('register');
});

// POST /register
app.post('/register', (req, res) => {
  // console.log(req.body);

  const email = req.body.email;
  const password = req.body.password;
  const id = Math.random().toString(36).substring(2, 6);

  const user = {
    id: id,
    email: email,
    password: password
  };

  users[id] = user;
  console.log(users);

  res.redirect('/login');
});

// GET /login
app.get('/login', (req, res) => {
  res.render('login');
});

// POST /login
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // check if email or password are falsey
  if (!email || !password) {
    return res.status(400).send('please enter an email address AND a password');
  }

  // look up the user in the users database
  let foundUser = null;
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      foundUser = user;
    }
  }

  // did we find a user???
  if (!foundUser) {
    return res.status(403).send('no user with that email exists');
  }

  // check if passwords match
  if (foundUser.password !== password) {
    return res.status(401).send('wrong password');
  }

  // we found a user; we need to set the cookie
  res.cookie('userId', foundUser.id);

  // send the user somewhere
  res.redirect('/protected');
});

// GET /protected
app.get('/protected', (req, res) => {
  console.log(req.cookies);
  const userId = req.cookies.userId;

  const user = users[userId];

  const templateVars = {
    user: user
  };

  res.render('protected', templateVars);
});

// POST /logout
app.post('/logout', (req, res) => {
  res.clearCookie('userId');

  // send the user somewhere
  res.redirect('/home');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
