//Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

//For example, given the following Node class

/*
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
*/

//The following test should pass:

/*
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

const LEFT = '+';
const RIGHT = '-';
const NULL = 'N';

class Node {
    constructor({ value, leftChild = null, rightChild = null }) {
        this.value = value;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
    }

    serialize() {
        let result = this.value + LEFT;
        if (this.leftChild !== null) {
            result = result + this.leftChild.serialize();
        }
        else {
            result = result + NULL;
        }

        result = result + RIGHT;
        if (this.rightChild !== null) {
            result = result + this.rightChild.serialize();
        }
        else {
            result = result + NULL;
        }
        return result;
    }
}

function serialize(root) {
    return root.serialize();
}

function deserialize(string) {
    let result = null;
    if (string !== NULL) {
        const leftSide = string.substring(0, string.indexOf(LEFT));
        const rightSide = string.substring(string.indexOf(LEFT) + 1);
        console.log('Left side: ' + leftSide);
        console.log('Right side: ' + rightSide);
        //result = new Node({
        //    value: string.substring(0, string.indexOf(LEFT)),
        //    leftChild: deserialize(leftSide),
        //    rightChild: deserialize(rightSide)
        //});
    }
    return result;
}

const string = serialize(
    new Node({
        value: 'root', 
        leftChild: new Node({
            value: 'left', 
            leftChild: new Node({
                value: 'left.left'
            })
        }), 
        rightChild: new Node({
            value: 'right'
        })
    })
);

console.log('String: ' + string);

const node = deserialize(string);

console.log('Node: ' + node.leftChild.leftChild.value);