function main() {
    var a = 0
    // test1()
    // test2()
    test3()
    console.log(a)
}

main()

function test1() {
    var a = 1
    {
        var a = 2
        {
            var a = 3
            console.log(a)
        }
        console.log(a)
    }
    console.log(a)
}

function test2() {
    let a = 1
    {
        let a = 2
        {
            let a = 3
            console.log(a)
        }
        console.log(a)
    }
    console.log(a)
}

function test3() {
    var a = 10

    function fn() {
        console.log(a);
    }

    function show(f) {
        var a = 20;
        (function () {
            f();
        })();
    }

    show(fn);
}

