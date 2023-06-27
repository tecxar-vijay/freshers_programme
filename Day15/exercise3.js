
/// que : 1

class PersonAccount {
    constructor(firstname, lastname, incomes, expenses) {
        this.firstname = firstname
        this.lastname = lastname
        this.incomes = incomes
        this.expenses = expenses
        this.accountBalance = 0
    }
    totalIncome() {
        return this.incomes.reduce((a, b) => a + b, 0)
    }
    totalExpences() {
        return this.expenses.reduce((a, b) => a + b, 0)
    }
    set addIncomes(newincomes) {
        this.incomes.push(newincomes)
    }
    set addExpence(nExpence) {
        this.expenses.push(nExpence)
    }
    chackAccountBalance() {
        return this.accountBalance
    }
    accountInfo() {
        return `
          ==>Account Info
          Name : ${this.firstname} ${this.lastname}
          Balance : ${this.chackAccountBalance()}
          income : ${this.totalIncome()}
          Expences : ${this.totalExpences()}
        `
    }
}

const p1 = new PersonAccount("vijay", "prajapati", [2000, 5000, 6000], [1000, 5000])

console.log(p1.totalIncome());
console.log(p1.totalExpences());

p1.addIncomes = 10000
console.log(p1.totalIncome());
p1.addExpence = 5000
console.log(p1.totalExpences());
console.log(p1.chackAccountBalance());
console.log(p1.accountInfo());


//// que : 2

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
    constructor(arr) {
        this.arr = arr
    }
    count() {
        return this.arr.length
    }

    sum() {
        return this.arr.reduce((a, b) => a + b, 0)
    }

    min() {
        return this.arr.sort((a, b) => a - b)[0]
    }

    max() {
        return this.arr.sort((a, b) => b - a)[0]
    }

    range() {
        return this.max() - this.min()
    }

    mean() {
        return this.sum() / this.arr.length
    }

    median() {
        const sorted = this.arr.sort()
        let index = sorted.length / 2
        index = Math.floor(index)
        return sorted[index]
    }

    mode() {
        return Object.entries(this.arr.reduce((acc, curr) => {
            acc[curr] = acc[curr] ? (acc[curr] + 1) : 1
            return acc
        }, {})).sort((a, b) => a[1] - b[1]).pop()
    }

    describe() {
        return `
          count : ${this.count()}
          sum : ${this.sum()}
          max : ${this.max()}
          min : ${this.min()}
          median : ${this.median()}
          mode : ${this.mode()}
        `
    }
}

const st1 = new Statistics(ages)
console.log(st1.count());
console.log(st1.sum());
console.log(st1.min());
console.log(st1.max());
console.log(st1.range());
console.log(st1.mean());
console.log(st1.median());
console.log(st1.mode());
console.log(st1.describe());