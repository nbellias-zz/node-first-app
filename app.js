// Run this file as 'node app.js'

// System libs
var http = require('http');
var url = require('url');
var fs = require('fs');

// NPM installed libs
var uc = require('upper-case');
var formidable = require('formidable');
var nodemailer = require('nodemailer');
const sqlite3 = require('sqlite3').verbose();


// My libs
var dt = require('./src/modules/moddatetime')

var transporter = nodemailer.createTransport({
    host: 'aaa',
    port: 587,
    secure: false,
    auth: {
        user: 'aaaa',
        pass: 'aaaa'
    }
});

var mailOptions = {
    from: 'aaaaa',
    to: 'aaaaa',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

const db = new sqlite3.Database('data/local.db');

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
    // fs.readFile('src/index.html', function (err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'})
    //     res.write(data)
    //     return res.end()
    // });
    //--------------------------------------------------------------------
    // Step 3
    //--------------------------------------------------------------------
    // var q = url.parse(req.url, true);
    // var filename = "." + q.pathname;
    // // In the browser try http://localhost:8080/summer.html and http://localhost:8080/winter.html
    // fs.readFile(filename, function (err, data) {
    //     if (err) {
    //         res.writeHead(404, {'Content-Type': 'text/html'});
    //         return res.end("404 Not Found");
    //     }
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(uc.upperCase(data.toString()));
    //     return res.end();
    // });
    //--------------------------------------------------------------------
    // Step 4
    //--------------------------------------------------------------------
    // if (req.url == '/fileupload') {
    //     var form = new formidable.IncomingForm();
    //     form.parse(req, function (err, fields, files) {
    //         var oldpath = files.filetoupload.filepath;
    //         var newpath = './downloads/' + files.filetoupload.originalFilename;
    //         fs.rename(oldpath, newpath, function (err) {
    //             if (err) throw err;
    //             res.write('File uploaded and moved!');
    //             transporter.sendMail(mailOptions, function (error, info) {
    //                 if (error) {
    //                     console.log(error);
    //                 } else {
    //                     console.log('Email sent: ' + info.response);
    //                 }
    //             });
    //             res.end();
    //         });
    //     });
    // } else {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    //     res.write('<input type="file" name="filetoupload"><br>');
    //     res.write('<input type="submit">');
    //     res.write('</form>');
    //     return res.end();
    // }
    //--------------------------------------------------------------------
    // Step 5
    //--------------------------------------------------------------------
    db.serialize(() => {
        // db.run("CREATE TABLE lorem (info TEXT)");

        // const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        // for (let i = 0; i < 10; i++) {
        //     stmt.run("Ipsum " + i);
        // }
        // stmt.finalize();

        db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
            console.log(row.id + ": " + row.info);
        });
    });

    db.close();
}).listen(8080)