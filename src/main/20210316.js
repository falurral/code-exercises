//Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

//For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

//Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

const dictionary = new Map();

function processDictionary(set) {
    set.forEach(item => {
       for (let i = 1; i <= item.length; i++) {
           const prefix = item.substring(0, i);
           if (!dictionary.has(prefix)) {
               dictionary.set(prefix, []);
           }
           dictionary.get(prefix).push(item);
       }
    });
}

function autocomplete(query) {
    if (dictionary.has(query)) {
        return dictionary.get(query);
    }
    return [];
}

processDictionary([
    'dog',
    'deer',
    'deal'
]);
console.log(autocomplete('de'))