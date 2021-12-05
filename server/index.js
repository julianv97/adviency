const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');
require("dotenv").config();
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

mongoose
  .connect(
    process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log('🟢 DB Connected');
    app.listen({ port: process.env.PORT }, () => {
      console.log(`🚗 Server running on port 4000`);
    });
  })
  .catch((err) => {
    console.log('🔴 There was an error on the DB connection method.');
    console.log(err);
  });
