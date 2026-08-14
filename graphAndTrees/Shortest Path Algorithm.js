const INF = Infinity;
const adjMatrix = [
  [0, 5, 3, INF, 11, INF],
  [5, 0, 1, INF, INF, 2],
  [3, 1, 0, 1, 5, INF],
  [INF, INF, 1, 0, 9, 3],
  [11, INF, 5, 9, 0, INF],
  [INF, 2, INF, 3, INF, 0],
];

function shortestPath(matrix, startNode, targetNode = null) {
    // Get the number of nodes in the graph
  const n = matrix.length;
  // Initialize distances array with Infinity and set the distance to the start node as 0
  const distances = new Array(n).fill(INF);
  // Initialize paths array to keep track of the shortest path to each node
  distances[startNode] = 0;
  // Initialize paths array to keep track of the shortest path to each node
  const paths = Array.from({ length: n }, (_, i) => [i]);
  // Initialize visited array to keep track of visited nodes
  const visited = new Array(n).fill(false);
  // Loop through all nodes to find the shortest path
  for (let i = 0; i < n; i++) {
    // Find the unvisited node with the smallest distance
    let minDistance = INF;
    // Initialize current node to -1 to indicate no node has been selected yet
    let current = -1;
    // Loop through all nodes to find the unvisited node with the smallest distance
    for (let nodeNo = 0; nodeNo < n; nodeNo++) {
        // If the node has not been visited and its distance is smaller than the current minimum distance, update the minimum distance and set the current node to this node
      if (!visited[nodeNo] && distances[nodeNo] < minDistance) {
        minDistance = distances[nodeNo];
        current = nodeNo;
      }
    }
    // If no unvisited node was found, break out of the loop
    if (current === -1) {
      break;
    }
    // Mark the current node as visited
    visited[current] = true;
    // Loop through all nodes to update the distances and paths for the neighbors of the current node
    for (let nodeNo = 0; nodeNo < n; nodeNo++) {
      const distance = matrix[current][nodeNo];
      // If the distance is not Infinity and the node has not been visited, calculate the new distance and update the distances and paths if the new distance is smaller than the current distance
      if (distance !== INF && !visited[nodeNo]) {
        const newDistance = distances[current] + distance;
        // If the new distance is smaller than the current distance, update the distances and paths for the neighbor node
        if (newDistance < distances[nodeNo]) {
          distances[nodeNo] = newDistance;
          paths[nodeNo] = [...paths[current], nodeNo];
        }
      }
    }
  }
  // If a target node is specified, only return the distance and path for that node; otherwise, return the distances and paths for all nodes
  const targets = targetNode !== null ? [targetNode] : [...Array(n).keys()];
  for (const nodeNo of targets) {
    if (nodeNo === startNode || distances[nodeNo] === INF) {
      continue;
    }
    const path = paths[nodeNo].join(' -> ');
    console.log(`\n${startNode}-${nodeNo} distance: ${distances[nodeNo]}\nPath: ${path}`);
  }
  return [distances, paths];
}

shortestPath(adjMatrix,0,5)