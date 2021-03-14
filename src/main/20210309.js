//Given an array of integers, find the first missing positive integer in linear time and constant space. 
//In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

//For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

//You can modify the input array in-place.

function findMissingPositiveInteger(array) {
    const sortedPositives = array.sort((a, b) => {
        return a - b;
    });
    let missing = 1;
    for (let i = 0; i < sortedPositives.length; i++) {
        const current = sorted[i];
        const next = sorted[i + 1];
        if (current > 0 && next !== current + 1) {
            missing = current + 1;
            break;
        }
    }
    return missing;
}

console.log([3, 4, -1, 1], findMissingPositiveInteger([3, 4, -1, 1]));
console.log([1, 2, 0], findMissingPositiveInteger([1, 2, 0]));
console.log([-1, -1, -1], findMissingPositiveInteger([-1, -1, -1]));

