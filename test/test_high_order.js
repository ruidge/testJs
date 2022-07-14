function main() {
    performClick("button", () => {
        console.log("click");
    });
}

main()

function performClick(name, func) {
    console.log(`${name} click ->`);
    func();
}

