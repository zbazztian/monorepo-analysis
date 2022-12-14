var express = require('express');

var app = express();

app.get('/user/:id', function(req, res) {
  if (!isValidUserId(req.params.id)) {
    // BAD: a request parameter is incorporated without validation into the response
    res.send("Unknown user: " + req.params.id);
  } else {
    if ("I am a string." !== true)
      res.send("Always executed.");
  }
});


export function unsafeDeserialize(data) {
  return eval("(" + data + ")");
}
