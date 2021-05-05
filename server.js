var express = require('express')
var app = express()
var bodyParser = require('body-parser');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SERVER_PORT = process.env.PORT || 3000;
const MAX_LENGTH_WORD = 10;

app.post('/getWordLengthFrequency', function (req, res) {
	console.log("post requested received with data: ");
    
    var data = req.body.data;
    var dataArray = data.split(" ");

    console.log(dataArray);

    var result = new Array(MAX_LENGTH_WORD);
    result.fill(0);
;
    var word = null;   
   
    for (var i = 0; i < dataArray.length; i++ ) {
    word = dataArray[i]
    result[word.length-1] = result[word.length-1] +1
    console.log(result) 

    
}

    console.log("sending response");
    res.send(result);
    res.end();
 
})

app.listen(SERVER_PORT, () => {
	console.log("Server listening on port: " + SERVER_PORT);
})

