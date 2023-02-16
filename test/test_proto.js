(function main() {
    let constructor = function (param) {
        this.param = param
        // return {}
        return 1
    };
    constructor.prototype.name = "name"
    constructor.prototype.print = console.log

    //以下会直接修改初始的原型链.
    // constructor.prototype = {
    //     print: console.log
    // }
    //使用new的时候return 1的没意义
    let obj = new constructor("k1");
    // let obj =  constructor();
    console.log(obj.__proto__ === constructor.prototype);
    console.log(obj.constructor === constructor);
    console.log(obj.constructor === constructor.prototype.constructor);
    console.log(Object.getPrototypeOf(obj) === constructor.prototype);

    console.log("---------------------------");

    //对象没有prototype,只有__proto__
    console.log(obj.prototype);
    console.log(obj.__proto__);
    console.log(constructor.__proto__);
    console.log(constructor.__proto__ === Function.prototype);
    console.log(Function.__proto__ === Object.prototype);

    while (obj != null) {
        console.log(obj)
        obj = obj.__proto__
    }
})()

/** new关键字的用法
 *1.先创建一个空的对象{}
 *2.将{}.__proto__指向构造函数.prototype
 *3.将构造函数中的this指向这个创建的对象
 *4.如果构造函数没有返回值或返回值是基本数据类型，则将这个新创建的对象返回；如果构造函数的返回值是引用数据类型，则直接返回这个结果。
 */

/** __proto__、prototype、constructor三者的关系
 *1.__proto__属性在所有对象中都存在，指向其构造函数的prototype对象；prototype对象只存在（构造）函数中，用于存储共享属性和方法；
 * constructor属性只存在于（构造）函数的prototype中，指向（构造）函数本身。
 *2.一个对象或者构造函数中的隐式原型__proto__的属性值指向其构造函数的显式原型 prototype 属性值，
 *关系表示为：instance.__proto__ === instance.constructor.prototype
 *3.除了 Object，所有对象或构造函数的 prototype 均继承自 Object.prototype，原型链的顶层指向 null：Object.prototype.__proto__ === null
 *4.Object.prototype 中也有 constructor：Object.prototype.constructor === Object
 *5.构造函数创建的对象（Object、Function、Array、普通对象等）都是 Function 的实例，它们的 __proto__ 均指向 Function.prototype。
 *
 */
