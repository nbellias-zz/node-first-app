// Run this file as 'node app.js'

// System libs
var http = require('http');
var url = require('url');
var fs = require('fs');

// NPM installed libs
var uc = require('upper-case');

// My libs
var dt = require('./moddatetime')

http.createServer(function (req, res) {
    // Step 1
    //--------------------------------------------------------------------
    // res.writeHead(200, { 'Content-Type': 'text/html' })
    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;
    // res.write(
    //     `
    //     <h1>Hello World!</h1>
    //     <p>The date and time are currently: ${dt.myDateTime()}</p>
    //     <p>${req.url}</p>
    //     <p>${txt}</p>
    //     `
    // )
    // res.end()
    //--------------------------------------------------------------------
    // Step 2
    //--------------------------------------------------------------------
    // fs.readFile('index.html', function (err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'})
    //     res.write(data)
    //     return res.end()
    // });
    //--------------------------------------------------------------------
    // Step 3
    //--------------------------------------------------------------------
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    // In the browser try http://localhost:8080/summer.html and http://localhost:8080/winter.html
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(uc.upperCase(data.toString()));
        return res.end();
    });
}).listen(8080)