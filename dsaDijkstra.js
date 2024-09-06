class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }

  print() {
    console.log("queue status", this.values);
  }
}

function dijkstra(graph, start) {
  const distances = {};
  const priorityQueue = new PriorityQueue();
  const previous = {};
  let path = []; // to store the shortest path

  // Initial state
  for (let node in graph) {
    if (node === start) {
      distances[node] = 0;
      priorityQueue.enqueue(node, 0);
    } else {
      distances[node] = Infinity;
      priorityQueue.enqueue(node, Infinity);
    }
    previous[node] = null;
  }

  while (priorityQueue.values.length) {
    let smallest = priorityQueue.dequeue().val;

    if (smallest === null) break;

    // Loop through the neighboring nodes
    for (let neighbor in graph[smallest]) {
      let distance = graph[smallest][neighbor];
      let newDist = distances[smallest] + distance;
      // console.log(
      //   smallest,
      //   neighbor,
      //   distance,
      //   distances[smallest],
      //   newDist,
      //   distances[neighbor]
      // );
      if (newDist < distances[neighbor]) {
        distances[neighbor] = newDist;
        previous[neighbor] = smallest;
        priorityQueue.enqueue(neighbor, newDist);
      }

      // priorityQueue.print();
      // console.log("distances", distances);
      // console.log("previous", previous);
    }
  }

  console.log("distances", distances);
  console.log("previous", previous);

  // Generate the shortest path
  let current = "F";
  while (previous[current]) {
    path.push(current);
    current = previous[current];
  }

  path.push(start);
  path.reverse();

  return { distances, path };
}

// Example graph represented as an adjacency list
const graph = {
  A: { B: 4, C: 2 },
  B: { A: 4, E: 3 },
  C: { A: 2, D: 2, F: 4 },
  D: { C: 2, E: 3 },
  E: { B: 3, D: 3, F: 1 },
  F: { C: 4, E: 1 },
};

const result = dijkstra(graph, "A");
console.log(result);
