var express = require('express')

var app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/editor', function (req, res){ 
    res.sendFile(__dirname + "/public/editor.html");
});

var port = process.env.PORT || 5000 

app.listen(port, function() {
	
	console.log('Servidor iniciado');

});
