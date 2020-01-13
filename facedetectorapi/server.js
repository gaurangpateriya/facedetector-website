const express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const knex= require('knex');
const Clarifai = require( 'clarifai') ;
const {handlesignin} =require ('./endpoints/signin.js');
const {handleregister} =require ('./endpoints/register.js');
const {handleimage} =require ('./endpoints/image.js');
const {handleimageurl} =require ('./endpoints/imageurl.js');

const app = express();

app.use(cors());


const clarifaiapp = new Clarifai.App({
  apiKey: '2decd50a7ada419193927f9b5e0adb5f'
});


var data = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'gaurang@1999',
    database : 'facedetector'
  }
});

app.use(bodyparser.json());

app.post('/signin',(req,res)=>{handlesignin(req,res,bcrypt,data)});
app.put('/imageurl',(req,res)=>{handleimageurl(req,res,clarifaiapp)});

app.put('/image',(req,res)=>{handleimage(req,res,data)})
app.post('/register',(req,res)=>{handleregister(req,res,bcrypt,data)});


app.listen(3000)
