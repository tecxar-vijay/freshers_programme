
class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    method1() {
        console.log("method1 callled");
    }
}
const a1 = new Animal("elephent", 55, "grey", 4)
console.log(a1);
console.log(a1.method1());

class Cat extends Animal {
    method1() {
        console.log("overridden method1");
    }
}
const c1 = new Cat()
console.log(c1.method1());


class Example {
    constructor(ages) {
    }
    static countNumOfAges() {
        return age.count()
    }
}
// const e1 = new Example(ages)
// console.log(e1.countNumOfAges());