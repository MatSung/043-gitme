const http = require('node:http');
const fs = require('node:fs');
const fsPromises = require('node:fs/promises');


const server = http.createServer(async (request,response) =>{

    // console.log(request.url);
    if(request.url == '/text'){
        let data = await fsPromises.readFile('./sample.txt', "utf8");
        response.writeHead(200, {
			'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*'
		});
        console.log("Returned: " + data);
        response.write(data);
    } else if (request.url =="/user" || "/users"){
        let data = await fsPromises.readFile('.' + request.url + '.json');
        response.writeHead(200, {
			'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
		});
        console.log("Returned: " + data);
        response.write(data);
    } 

    response.end();
});

server.listen(80);
