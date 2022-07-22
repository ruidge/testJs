let lib = require('./lib');

function main() {
    let promise = new Promise((resolve, reject) => {
        lib.sleepBlock(1000)
        //必须
        // resolve("sleep 1000 resolve");
        reject("sleep 1000 reject");
    });
    promise.then((value) => {
            console.log(value)
            lib.sleepBlock(1000)
            return "resolve 1"
        }, function (value) {
            console.log(value)
            // return "reject 1"
            return new Promise(function (resolve, reject) {
                reject("reject 1 reject")
            })
        }
    ).then(function (value) {
        console.log('resolve 2 ' + value)
    }, function (value) {
        console.log('reject 2 ' + value)
    })
}

main()