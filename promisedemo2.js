// A more common example you may come across is a technique called Promisifying. 
// This technique is a way to be able to use a classic JavaScript function that takes a callback, 
// and have it return a promise.

const fs = require('fs');

// The promise definition in promisifying function getFile(fileName)
const getFile = fileName => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err); // calling `reject` will cause the promise to fail with or without the error passed as an argument
                return; // and we don't want to go any further
            }
            resolve(data);
        });
    });
};

// Consuming the above promise
getFile('/etc/passwd')
    .then(data => console.log(data.toString()))
    .catch(err => console.error(err));