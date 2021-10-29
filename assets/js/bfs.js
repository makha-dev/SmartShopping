function bfs(graph, startNode, endNode) {
    var visited = [];
    var row = 12;
    var col = 16;
    for (var i = 0; i < row; i++) {
        visited.push([]);
        for (var j = 0; j < col; j++) {
            visited[i].push(0);
        }
    }

    var queue = [];
    queue.push(startNode);
    while (queue.length > 0) {
        startNode = queue.shift();
        // mark startNode as visited
        visited[startNode.x][startNode.y] = 1;

        // check if current node is target node return the path
        if (startNode.equals(endNode)) {
            var path = [];
            var current = startNode;
            while (current != null) {
                path.push(current);
                current = current.parent;
            }
            return path.reverse();
        }

        // find adjacent neighbors of current node 
        var neighbors = [];
        var adjacentPositions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
        for (var adjacent of adjacentPositions) {
            var i = startNode.x + adjacent[0];
            var j = startNode.y + adjacent[1];
            if (i >= 0 && i < row && j >= 0 && j < col && visited[i][j] != 1 && graph[i][j] == 0) {
                neighbors.push(new Node(startNode, i, j));
            }
        }
        // add all valid childs to queue
        for (const neighbor of neighbors) {
            queue.push(neighbor);
        }
    }
}
