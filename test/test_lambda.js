function main() {
    calc(function (a) {
        return a
    })

    calc((a, b) => {
        return a * b
    })
}

main()

function calc(func) {
    console.log(func(2, 3))
}