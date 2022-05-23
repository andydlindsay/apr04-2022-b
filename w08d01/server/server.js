const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('../client/build'));
// app.use(cors());
// app.use(express.urlencoded({ extended: false }));

// import the router(s)
const todoRouter = require('./routes/todos-router');

// app.use the router(s)
app.use('/todos', todoRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
