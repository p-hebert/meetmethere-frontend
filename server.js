
const express = require('express');
const server = express();

server.get('/*', (req, res) => {
  var regfiles = /(.)*\.[a-z]{2,4}/
  if(req.url.match(regfiles)){
    console.log(`${__dirname}${req.url}`);
    res.sendFile(`${__dirname}${req.url}`);
  }else{
    console.log(`${__dirname}/app/views${req.url}/index.html`);
    res.sendFile(`${__dirname}/app/views${req.url}/index.html`);
  }
});

server.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
