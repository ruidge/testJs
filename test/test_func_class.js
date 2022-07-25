function Stu3(name, grade) {
    var _name = name
    var _grade = grade

    function gradeUpward() {
        _grade++
    }

    function printInfo() {
        console.log('name is ' + _name + ', grade is ' + _grade)
    }

    return {
        "name": _name,
        "grade": _grade,
        "gradeUpward": gradeUpward,
        "printInfo": printInfo
    }
}

class Stu4 {
    constructor(name, grade) {
        this.name = name
        this.grade = grade
    }

    gradeUpward() {
        this.grade++
    }

    printInfo() {
        console.log('name is ' + this.name + ', grade is ' + this.grade)
    }
}


(function main() {
    var stu3 = new Stu3("Stu3", 0)
    stu3.gradeUpward()
    stu3.printInfo()
    var stu4 = new Stu4("Stu4", 4)
    stu4.gradeUpward()
    stu4.printInfo()
})()
