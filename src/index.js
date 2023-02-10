module.exports = function reverse (n) {

    let str = String(n).split('').reverse().join('');
    return parseInt(str);
}
