const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const path = require('path');
const pg = require('pg');
const bodyParser = require('body-parser');
const compiler = webpack(webpackConfig);

const app = express(); 
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let localConn = {
    host : 'localhost',
    user: 'justin',
    password: 'justin',
    database: 'jcruzz',
    charset: 'utf8'
  };
let connection = process.env.DATABASE_URL || localConn;

const knex = require('knex')({
  client: 'pg',
  connection
});


knex.schema.createTableIfNotExists('users', function(table) {  
    table.increments();
    table.string('shortid');
    table.string('username');
    table.string('email', 128);
    table.string('password');
    table.string('first_name');
    table.string('last_name');
    table.string('phone');
    table.string('street_address');
    table.string('city');
    table.string('state');
    table.string('zip');
    table.timestamps();
}).then(data => console.log(data.toString()));  



const bookshelf = require('bookshelf')(knex);

let User = bookshelf.Model.extend({
  tableName: 'users'
});

if(process.env.NODE_ENV !== 'production') {
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/',
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  }));  
}

app.post('/register', (req,res) => {
  let user  = new User();
  const { username, password, email, shortid } = req.body;
  const emptyData = {
    'first_name': '',
    'last_name': '',
    phone: '',
    street_address: '',
    city: '',
    zip: ''
  };

  User.forge({ username, password, email, shortid, ...emptyData })
    .save()
    .then(u => {
      res.end();
    });
});

app.post('/register/form2', (req,res) => {
  const { firstName, lastName, phone, shortid } = req.body;
  new User().query(qb => {
    qb.whereIn('shortid', shortid);
  }).save({
      first_name: firstName,
      last_name: lastName,
      phone
    }, {
      method: 'update'
    }).then(() => {
      console.log(foo);
      res.end();
    });

});


app.post('/register/form3', (req, res) => {
  const { address, city, zip, state, shortid } = req.body;

  new User().query(qb => {
    qb.whereIn('shortid', shortid);
  }).save({
    street_address: address,
    city,
    state,
    zip
  }, {
    method: 'update'
  }).then(() => res.end());
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});
 
const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});