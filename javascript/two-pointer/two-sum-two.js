/**
 * Given an array of integers that is already sorted in ascending order
 * find two numbers such that they add up to a specific target number
 *
 * the function twoSum should return indices of the two numbers such that add up to the target
 * where index 1 must be less than index 2
 */
var numbers = [2, 4, 7, 9, 10, 11, 13, 16, 18, 20, 23];
var twoSum = function (numbers, target) {
    var left = 0;
    var right = numbers.length - 1;
    if (numbers.length === 0)
        return [];
    while (numbers[left] + numbers[right] !== target) {
        if (left >= numbers.length - 1)
            break;
        if (numbers[left] + numbers[right] < target) {
            left++;
        }
        else {
            right--;
        }
    }
    if (numbers[left] + numbers[right] !== target) {
        return [];
    }
    return [left, right];
};
console.log(twoSum(numbers, 43));
