// write your code here
const http = require('http');
// create the server object
const server = http.createServer((req, res) => {
    // send headers 
    res.writeHead(200,{ 'Content-Type': 'text/plain' });   ;
    //send body response
    res.end("Hello World");
});
// listen to server port
const port = 8080;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 
