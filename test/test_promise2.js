function main() {
    let promise = new Promise(function (resolve, reject) {
        resolve("resolved", "success");
    });
    promise.then(function (arg1, arg2) {
            console.log(arg1 + ":" + arg2)
        }
    )
}

main()