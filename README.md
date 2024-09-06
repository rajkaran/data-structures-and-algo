1. Objects and Pointers (Adjacency List using Objects)

```
class Node {
    constructor(value) {
        this.value = value;
        this.neighbors = []; // Array of pointers to neighboring nodes
    }

    addNeighbor(node) {
        this.neighbors.push(node);
    }
}

// Creating nodes
let A = new Node('A');
let B = new Node('B');
let C = new Node('C');

// Defining connections (edges)
A.addNeighbor(B);
A.addNeighbor(C);
B.addNeighbor(A);
C.addNeighbor(A);

// Example usage
console.log(A.neighbors.map(n => n.value)); // Output: ['B', 'C']
```

2. Adjacency Matrix (Using a 2D Array)

```
// Initialize an adjacency matrix for a graph with 3 nodes
let adjacencyMatrix = [
    [0, 1, 1], // Connections from A (to B and C)
    [1, 0, 0], // Connections from B (to A)
    [1, 0, 0]  // Connections from C (to A)
];

// Check if there's an edge between A (index 0) and B (index 1)
console.log(adjacencyMatrix[0][1]); // Output: 1 (true, there's an edge)
```

3. Adjacency List (Using a HashMap)

```
// Initialize an adjacency list using a JavaScript object (hashmap)
let adjacencyList = {
    'A': ['B', 'C'], // Node A is connected to B and C
    'B': ['A'],      // Node B is connected to A
    'C': ['A']       // Node C is connected to A
};

// Example usage: Get neighbors of node A
console.log(adjacencyList['A']); // Output: ['B', 'C']

// Add a new edge between C and B
adjacencyList['C'].push('B');
adjacencyList['B'].push('C');

console.log(adjacencyList['C']); // Output: ['A', 'B']
```

These JavaScript implementations cover the three primary ways to represent a graph in memory: using objects and pointers, an adjacency matrix, and an adjacency list. Each approach has its own strengths depending on the structure and requirements of your graph.
