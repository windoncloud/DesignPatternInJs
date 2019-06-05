var calculateBonus = function (performanceLevel, salary) {
    if (performanceLevel === 'S') {
        return salary * 4;
    }
    if (performanceLevel === 'A') {
        return salary * 3;
    }
    if (performanceLevel === 'B') {
        return salary * 2;
    }
}

calculateBonus('B', 20000)
calculateBonus('S', 6000)

var perfomanceS = function (salary) {
    return salary * 4
}
var perfomanceA = function (salary) {
    return salary * 3
}
var perfomanceB = function (salary) {
    return salary * 2
}

var calculateBonusBetter = function (performanceLevel, salary) {
    if (performanceLevel === 'S') {
        return perfomanceS(salary)
    }
    if (performanceLevel === 'A') {
        return perfomanceA(salary)
    }
    if (performanceLevel === 'B') {
        return perfomanceB(salary)
    }
}

var c = calculateBonusBetter('A', 10000)
console.log('c', c)