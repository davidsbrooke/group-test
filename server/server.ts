import * as express from 'express';
import * as mongoose from 'mongoose';
import config = require ('./config/config');

const app = express();
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost/todolist';

mongoose.connect(MONGO_URL, (err) => {
  if (err) console.error(err);
  else console.log(`Connected to ${MONGO_URL}`);
});

//render html files to client
app.get(/\/client.{0,}\/+html/, (req, res, next) => {
  res.render(config.root + req.path);
});

//Routes config
app.use(require('body-parser')());
app.use('/client', express.static('client'));
app.use('/bower_components', express.static('bower_components'));

//specify index.html and location
app.get('/', (req, res, next) => {
  res.sendFile(config.client + '/shared/index.html');
});
app.get('/*', (req, res, next) => {
  res.sendFile(config.client + '/shared/index.html')
});


app.use('/api/v1/list', require ('./api/todo/routes'));

//if path starts/client, /bower_components or /api send a 404
app.get(/\/(client|bower_components|api).{0,}/, (req, res, next) => {
  next({status: 404, message: `${req.path} is not found or does not exist, check for types`});
});

app.use((req, res, next) => {
  return next ({ status: 404, message: `${req.method}: ${req.path} is not found`});
});

app.listen(3000, () => {
  console.log(`server is listening at ${3000}`);
});
