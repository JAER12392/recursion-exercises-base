const visitAllNodes = function(node, callback) {
    // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node

    let children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
        visitAllNodes(children[i], callback);
    }
    callback(node);
};


const flattenTreeToArray = function(node) {
    // Hint: Use visitAllNodes()
    let array = [];

    visitAllNodes(node, childNode => array.push(childNode));
    return array;

}

module.exports = {
    visitAllNodes: visitAllNodes,
    flattenTreeToArray: flattenTreeToArray
};
