import * as express from 'express';
import * as mongoose from 'mongoose';
import * as config from './config/config'

const app = express();




app.listen(3000, () => {
  console.log(`Big Brother is listening on localhost:3000`);
});
