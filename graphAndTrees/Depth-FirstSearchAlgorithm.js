function dfs(graph,root){
    // check if the graph is empty or the root is not a valid node
  if(graph.length === 0 || root < 0 || root >= graph.length){
    return 'Invalid graph or root node';
  }
  // Initialize an empty array to keep track of visited nodes and a stack with the root node
  let visited =[];
  let stack =[root];
  // Loop until the stack is empty
  while(stack.length > 0){
    // Pop the last node from the stack and check if it has been visited
    let current =stack.pop()
    if(!visited.includes(current) ){
        // If the current node has not been visited, add it to the visited array and get its neighbors from the graph
      visited.push(current);
      // Get the neighbors of the current node and push them onto the stack if they are connected (i.e., have a value of 1 in the adjacency matrix)
      let neighbors =graph[current]
      for (let i =0;i < neighbors.length;i++){
       if(neighbors[i]===1) {stack.push(i)}
      }
    }
  }
  return visited;
}
console.log(dfs([[0,1,1,0,0,0],
                [1,0,0,1,1,0],
                [1,0,0,0,1,0],
                [0,1,0,0,0,1],
                [0,1,1,0,0,1],
                [0,0,0,1,1,0]], 0));