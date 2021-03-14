//Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

//For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

//Bonus: Can you do this in one pass?

function find(k, list) {
    let found = false;
    let i1 = -1;
    let j1 = -1;
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (i !== j && list[i] + list[j] === k) {
                found = true;
                i1 = i;
                j1 = j;
                break;
            }
        }
    }
    return {
        found,
        i1,
        j1
    };
}

console.log(find(
    10,
    [ 6, 8, 5, 4, 2, 1, 3 ]
));

//Solution: https://medium.com/@manivel45/given-a-list-of-numbers-and-a-target-return-whether-any-two-numbers-from-the-list-add-up-to-b09207f920f4