const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/User');
const mongo = require('mongoose');

dotenv.config();
const app = express();

mongo
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Funworld listening on port ${process.env.PORT}!`)
    );
  })
  .catch((e) => console.log(e));

app.use(express.json());

app.use('/user', userRouter);
