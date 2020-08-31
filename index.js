//const text = require('./testText.txt');
var fs = require('fs');
const express = require('express');
const app = express();
port = 9000;
var data = fs.readFileSync('testText.txt', 'utf8');

//console.log(text);
   app.get('/',(req,res)=>{
   const server = data.toString();
   res.status(200).send(server);

   });
//    const server =null;
//    return server;
      

app.listen(port,()=>{console.log("Listening on port"+port)});




