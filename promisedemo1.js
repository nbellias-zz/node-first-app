// A promise is commonly defined as a proxy for a value that will eventually become available.
// Promises are one way to deal with asynchronous code, without getting stuck in callback hell.
// Promises have been part of the language for years(standardized and introduced in ES2015), 
// and have recently become more integrated, with async and await in ES2017.

let done = false

// The promise definition
const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
})

// Consuming the above promise
const checkIfItsDone = () => {
    isItDoneYet
        .then(ok => {
            console.log(ok)
        })
        .catch(err => {
            console.error(err)
        })
}

checkIfItsDone()