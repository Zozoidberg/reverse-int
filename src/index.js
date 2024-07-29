module.exports = function reverse (n) {
    const stringOfNumber = String(Math.abs(n))
    return Number(stringOfNumber.split('').reverse().join(''))
}
