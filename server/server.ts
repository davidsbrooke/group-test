import * as express from 'express';
import * as mongoose from 'mongoose';
import config = require('./config/config')

const app = express();




app.listen(3000, () => {
  console.log(`Server is listening on ${3000}`);
});
