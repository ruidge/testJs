const fs = require('fs')
const fsp = require('fs').promises

let path = 'test.txt';

(function main() {
    // opFile1()
    opFile2()
    // opFile3()
})()

function opFile1() {
    fs.exists(path, exists => {
        if (exists) {
            fs.unlink(path, (err) => {
                op2(path)
            })
        } else {
            op2(path)
        }
    })
}

function op2(path) {
    let date = new Date();
    let content = `current time is :${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    fs.writeFile(path, content, err => {
        if (!err) {
            console.log('write success')
        } else {
            console.log(err)
        }
    })
}

function opFile2() {
    fsp.access(path).then(err => {
        if (!err) {
            console.log(err)
            return path
        }
    }).then(value => {
        let date = new Date();
        let content = `current time is :${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        return fsp.writeFile(value, content)
    }).then(value => {
        return new Promise((resolve, reject) => {
            resolve('write success 2');
        })
    }).then(value => {
        console.log(value)
    })
}

async function opFile3() {
    await fsp.access(path)
    let date = new Date();
    let content = `current time is :${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    await fsp.writeFile(path, content)
    let result = await new Promise((resolve, reject) => {
        resolve('write success 3');
    })
    console.log(result)
}
