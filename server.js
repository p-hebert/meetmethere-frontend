/*jslint
    es6, node
*/

const express = require('express');
const server = express();

//Middleware Test
// server.use((req, res, next) => {
//   next();
// });


// server.configure(function(){
//   server.use('/*', express.static(`${__dirname}app/views/${req.url.substring(1)}/index.html')`);
// });


//
// //Error Handler
// server.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).send();
// });
//
server.get('/*', (req, res) => {
  if(req.url.substring(req.url.length-2) === "js" || req.url.substring(req.url.length-3) === "css"){
    res.sendFile(`${__dirname}${req.url}`);
  }else{
    console.log(`${__dirname}/app/views${req.url}/index.html`);
    res.sendFile(`${__dirname}/app/views${req.url}/index.html`);
  }
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
