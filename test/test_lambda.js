(function main() {
    calc(function (a) {
        console.log(`1:${a}`)
        return a
    })

    calc((a, b) => {
        console.log(`2:${a},${b}`)
        return a * b
    })

    calc((a, b, c) => {
        console.log(`3:${a},${b},${c}`)
        return a * b * c
    })
})()

function calc(func) {
    console.log(func(2, 3))
}