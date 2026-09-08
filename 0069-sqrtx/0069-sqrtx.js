/**
 * @param {number} x
 * @return {number}
 */

//  We keep dividing the search range in half and find the biggest number whose square is not greater than x.

var mySqrt = function(x) {
   if (x < 2) {
        return x;
    }

    let left = 1;
    let right = x;
    let answer = 0;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (mid <= x / mid) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer; 
};