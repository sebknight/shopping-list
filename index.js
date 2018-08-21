//setting up constants
const http = require('http');
const fs = require('fs');
// const path = require('path');
// const data = require('./data/shopping-list');
// const qs = require('querystring');

//creating server
var server = http.createServer(function (request, response){
    console.log(`${request.method} request for ${request.url}`);


    //top level GET request
    if (request.method === 'GET') {
        if (request.url === "/" || request.url === "/home" || request.url === "/index") {
            page = "home";
            fs.readFile('./public/index.html', 'UTF-8', function (error, contents) {
                if (error) {
                    console.log("Something went wrong");
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.end(contents);
                }
            });

    } //top level GET request ENDS

    // else if (request.method === 'POST'){
    //     if (request.url === '/addItem') {
    //         var body = '';

    //         request.on('data', function (data){
    //             body += data;
    //         });
    //         request.on('end', function(){
    //             var itemData = qs.parse(body);
    //             console.log(itemData);
    //         });
    //     }
    // }
    
var page;

} //top level request ends
}); //create server ENDS


server.listen(5000);
console.log('the server is running on port 5000');


