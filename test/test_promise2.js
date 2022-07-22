let lib = require('./lib');

function main() {
    let promise = new Promise(function (resolve, reject) {
        lib.sleepBlock(5000)
        resolve("resolved", "success");
    });
    promise.then(function (arg1, arg2) {
            console.log(arg1 + ":" + arg2)
        }
    )
    console.log('end')
}

main()