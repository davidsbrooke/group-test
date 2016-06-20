import * as mongoose from 'mongoose';
import config = require('./config/config');
import * as express from 'express';


const app = express();

app.listen(3000, () => {
  console.log(`Server is listening on ${3000}`);
  console.log(`Yo whats up david ${3000}`);
  console.log('testing!!');
});
