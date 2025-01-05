const express = require('express');
require('dotenv').config();
const { resolve } = require('path');
const sequelize = require('./lib/sequelize');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;


const reservationRouter = require('./routes');

app.use(express.json());
app.use(cors());


app.use('/', reservationRouter);


sequelize
  .authenticate()
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `Database connected successfully and app listening on port ${PORT}`
      )
    );
  })
  .catch((error) => {
    console.log(error.message);
  });
