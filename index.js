const express = require('express');
const server = express();

server.get('/',function(request,reponse) {
    response.send("<h1>HELLO AGAIN</h1>");
});

server.listen(5003,function() {
  console.log("Server is running...")
});
