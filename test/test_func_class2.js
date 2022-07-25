function Stu3(name, grade) {
    this._name = name
    this._grade = grade
}

Stu3.prototype.gradeUpward = function () {
    this._grade++
}

Stu3.prototype.printInfo = function () {
    console.log('name is ' + this._name + ', grade is ' + this._grade)
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
    let stu3 = new Stu3("Stu3", 0)
    stu3.gradeUpward()
    stu3.printInfo()
    let stu4 = new Stu4("Stu4", 4)
    stu4.gradeUpward()
    stu4.printInfo()
})()
