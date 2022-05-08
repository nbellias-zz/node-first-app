/*
A promise can be returned to another promise, creating a chain of promises.

A great example of chaining promises is the Fetch API, which we can use to get a resource 
and queue a chain of promises to execute when the resource is fetched.

The Fetch API is a promise-based mechanism, and calling fetch() is equivalent to defining 
our own promise using new Promise().
*/

const fetch = require('node-fetch') // using fetch v2, brought into the program with 'npm i node-fetch@2'

const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
};

const json = response => response.json();

fetch('https://reqres.in/api/products')
    .then(status) // note that the `status` function is actually **called** here, and that it **returns a promise***
    .then(json) // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
    .then(data => {
        // ... which is why `data` shows up here as the first parameter to the anonymous function
        console.log('Request succeeded with JSON response', data);
    })
    .catch(error => {
        console.log('Request failed', error);
    });