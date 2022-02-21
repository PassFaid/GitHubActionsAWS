var http = require("http");
//Create WebServer 	
var server = http.createServer(function (req, res) {
//Respond to / URI
	if (req.url == '/') { //check the URL of the current request
         	if (req.method == 'POST') {
    			res.writeHeader(200, {'Content-Type':'application/json'});
				var y = Math.random();
				if (y < 0.5)
    				res.write(JSON.stringify({"result":true}));
				else
    				res.write(JSON.stringify({"result":false}));
			}
	} 
    else if (req.url == '/healthcheck') { //check the URL of the current request
      	res.writeHead(200, { 'Content-Type': 'text/html' });
       	res.write('ok'); //Server is up	
	} 
	else
	{
		//Respond with not Implemented yet
		res.writeHead(501, { 'Content-Type': 'text/html' });
		res.write('Wrong server path, please try again');
	}
	res.end();
}).listen(9000);
//Listen to port 9000
//Log to console log
console.log('Server running at http://localhost:9000/');



