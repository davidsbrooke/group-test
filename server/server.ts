import * as express from 'express';

const app = express();


app.listen(3000, () => {
  console.log(`Big Brother is listening on localhost:3000`);
});
