var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('test.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    

    if (err) {
        res.writeHead(404)
        res.write('Error: File Not Fount')
    } 
        else
        {
        res.write(data);
        }
    
    return res.end();
    });
}).listen(8080);