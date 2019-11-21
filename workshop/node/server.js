/** A simple Web server     
 *
 *  @desc 
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-11-21
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

'use strict';

// Declaration

const http = require('http');

let
    host = 'http:/localhost',
    port = 3000,
    server = undefined;





// Functions
function createServerCallback(request, response) {
    console.log('connection established.');

    response.writeHead(200, {
        "Content-type": "text/html",
        "Connection": "keep-alive"
    });

    response.write('<h1>hello World</h1>');
    response.write('<p>Lorem autosuave ipsum dolor sit, amet consectetur adipisicing elit. Eaque ab numquam labore.</p>');
    response.write('<a href="http://google.de">Google</a>');
    response.write('<hr>&copy; 2019 Autark');
    response.end();

}

function onServerConnection() {
    console.log('a server connection');
}

function onServerRequest() {
    console.log('a server request');
}

function onServerClose() {
    console.log('a server closed');
}

// Control

server = http.createServer(createServerCallback);
server.listen(port);

server.on('connection', onServerConnection); // Setzt Eventlistener
server.on('request', onServerRequest); // Setzt Eventlistener
server.on('close', onServerClose); // Setzt Eventlistener