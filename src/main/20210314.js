//Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

//For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

//Follow-up: Can you do this in O(N) time and constant space?

function maxNonAdjacent(list, constant) {
    let max = 0;
    const points = [];
    const pointsCount = Math.round(list.length/2);
    for (let i = 0; i < pointsCount; i++) {
        points[i] = i * 2;
    }
    let movingIndex = points.length - 1;

    while (movingIndex >= 0) {
        let current = 0;
        points.forEach(point => {
            if (list[point]) {
                current = current + list[point];
            }
        });
        max = Math.max(current, max);

        if (points[movingIndex] + 1 >= list.length) {
            movingIndex--;
        }
        if (movingIndex >= 0) {
            points[movingIndex] = points[movingIndex] + 1;
            for (let i = movingIndex + 1; i < points.length; i++) {
                points[i] = points[i - 1] + 2;
            }
        }
    }
    return max + constant;
}

function maxNonAdjacentList(list) {
    const max0 = maxNonAdjacent(list.splice(2), list[0]);
    const max1 = maxNonAdjacent(list.splice(3), list[1]);
    return Math.max(max0, max1);
}

console.log(maxNonAdjacentList([5, 2, 3, 5, 7, 9, 2]));
