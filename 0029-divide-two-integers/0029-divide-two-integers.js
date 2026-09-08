/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

var divide = function(dividend, divisor) {

    let sign = (dividend < 0) !== (divisor < 0);

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);

    let result = 0;

    while (a >= b) {
        let temp = b;
        let count = 1;

        while (a >= temp + temp) {
            temp = temp + temp;
            count = count + count;
        }

        a = a - temp;
        result = result + count;
    }

    if (sign) {
        result = -result;
    }

    if (result > 2147483647) {
        return 2147483647;
    }

    if (result < -2147483648) {
        return -2147483648;
    }

    return result;
};