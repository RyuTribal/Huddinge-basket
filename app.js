var express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

var PORT = process.env.PORT || 4242;

app.listen(PORT, function(){
    console.log('Server running at ' + PORT);
});