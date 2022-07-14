function main() {
    console.log(genCircleArea(1)())
    console.log(genCircleArea(2)())
}

main()

function genCircleArea(radius) {
    var PI = 3.14

    return function () {
        return PI * radius * radius
    }
}
