//A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

//Given the root to a binary tree, count the number of unival subtrees.

//For example, the following tree has 5 unival subtrees:

//        0
//       / \
//      1   0
//     / \
//    1   0
//   / \
//  1   1

class Node {
    constructor(value, leftChild, rightChild) {
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild
    }
}

function isUnivalTree(node, value) {
    if (node.leftChild === node.rightChild) {
        if (node.leftChild === null) {
            return true;
        }
        if (node.leftChild === value) {
            return isUnivalTree(node.leftChild, value) && isUnivalTree(node.leftChild, value);
        }
    }
    else if (node.leftChild === value && node.rightChild === null) {
        return isUnivalTree(node.leftChild, value);
    }
    else if (node.rightChild === value && node.leftChild === null) {
        return isUnivalTree(node.rightChild, value);
    }
    return false;
}

function countUnivalTrees(node, count = 0) {
    if (isUnivalTree(node, node.value)) {
        count++;
    }
    if (node.leftChild !== null) {
        count = countUnivalTrees(node.leftChild, count);
    }
    if (node.rightChild !== null) {
        count = countUnivalTrees(node.rightChild, count);
    }
    return count;
}

/*function countChildUnivalTrees(child, sibling, value, count, trees) {
    if (child !== null) {
        if (child.value === value && sibling !== null && sibling.value === value) {
            count = countUnivalTrees(child, count, trees + 1);
        }
        else {
            count = countUnivalTrees(child, count, 0);
        }
    }
    return count;
}

function countUnivalTrees(node, count = 0, trees = 0) {
    const value = node.value;
    if (node.leftChild === null && node.rightChild === null) {
        count++;
    }
    if (node.leftChild !== null && node.leftChild.value === value && node.rightChild !== null && node.rightChild.value === value) {
        count = count + 1 + trees;
    }
    count = countChildUnivalTrees(node.leftChild, node.rightChild, value, count, trees);
    count = countChildUnivalTrees(node.rightChild, node.leftChild, value, count, trees);
    return count;
}*/

/*const root = new Node(0,
    new Node(1,
        new Node(1,
            new Node(1, null, null),
            new Node(1, null, null)),
        new Node(0, null, null)),
    new Node(0, null, null)
);*/

const root = new Node('a',
    new Node('c',
        null,
        null
    ),
    new Node('b',
        new Node('b',
            null,
            null),
        new Node('b',
            null,
            new Node('b',
                null,
                null
            )
        )
    )
);

console.log(countUnivalTrees(root));