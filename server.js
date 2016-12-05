const express = require('express');

const app = express();

const config = require('./config');

const bodyParser=require('body-parser');

const swig = require('swig');

require('./db');
swig.setDefaults(config.swig);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({extended:true}));

// const indexRoute = require('./routes/');
// app.use('/', indexRoute);

const mhsRoute=require('./routes/mahasiswa');
app.use('/master/mahasiswa', mhsRoute);

app.use((req,res,next)=>{
	res.render('gagal');
});

app.listen(config.port, () => {
  console.log(`Mahasiswa Server is listening on port ${config.port}`);
});