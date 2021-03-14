// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

//For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

//You can assume that the messages are decodable. For example, '001' is not allowed.

function countDecodes(code, count = 1) {
    if (code.length === 0 || code.length === 1) {
        return count;
    }
    for (let i = 0; i < code.length - 1; i++) {
        const number = parseInt(code.substring(i, i + 2));
        if (number < 27) {
            count++
        }
    }
    let lastNumber = parseInt(code.substring(code.length - 2));
    if (lastNumber < 27) {
        count = countDecodes(code.substring(0, code.length - 2), count);
    }
    return count;
}

const code = '1263216';
console.log('Decoding ' + code + ': ' + countDecodes(code));