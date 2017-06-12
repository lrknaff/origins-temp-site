var express = require('express');
var app = express();

app.locals.title = "Origins Temp Site"

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 3000);

module.exports = app;
