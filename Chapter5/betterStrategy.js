var performanceS = function () {

}
performanceS.prototype.calculate = function (salary) {
    return salary * 4
}

var performanceA = function () {

}
performanceA.prototype.calculate = function (salary) {
    return salary * 3
}

var performanceB = function () {

}
performanceB.prototype.calculate = function (salary) {
    return salary * 2
}

var Bonus = function () {
    this.salary = null
}

Bonus.prototype.setSalary = function (salary) {
    this.salary = salary
}

Bonus.prototype.setStrategy = function (strategy) {
    this.strategy = strategy
}

Bonus.prototype.getBonus = function () {
    if (!this.strategy) {
        throw new Error('未设置 strategy 属性')
    }
    return this.strategy.calculate(this.salary)
}
var bonus = new Bonus()
bonus.setSalary(1000)
bonus.setStrategy(new performanceS)
console.log(bonus.getBonus())
bonus.setStrategy(new performanceA)
console.log(bonus.getBonus())
performanceA.prototype.calculate = function (salary) {
    return salary * 9
}
console.log(bonus.getBonus())