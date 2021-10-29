class TrieNode {
    constructor() {
        this.endOfWord = false;
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        var current = this.root;
        for (var i = 0; i < word.length; i++) {
            var ch = word.charAt(i);
            var node = current.children[ch];
            if (node == null) {
                node = new TrieNode();
                current.children[ch] = node;
            }
            current = node;
        }
        current.endOfWord = true;
    }

    // search(word) {
    //     var current = this.root;
    //     for (var i = 0; i < word.length; i++) {
    //         var ch = word.charAt(i);
    //         var node = current.children[ch];
    //         if (node == null) {
    //             return false;
    //         }
    //         current = node;
    //     }
    //     return current.endOfWord;
    // }

    searchNode(word) {
        var node = this.root;
        for (var i = 0; i < word.length; i++) {
            var ch = word.charAt(i);
            if (node.children[ch]) {
                node = node.children[ch];
            } else {
                return null;
            }
        }
        return node;
    }

    backtrack(results, word, current) {
        if (current.endOfWord) {
            results.push(word);
        } else {
            Object.keys(current.children).map(ch => {
                var node = current.children[ch];
                this.backtrack(results, word + ch, node);
            });
        }
    }

    getOptions(word) {
        var results = [];
        var current = this.searchNode(word);
        if (current !== null) this.backtrack(results, word, current);
        return results;
    }

}