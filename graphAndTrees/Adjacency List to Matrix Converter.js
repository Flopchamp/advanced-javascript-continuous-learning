function adjacencyListToMatrix(obj){
    // find the key of the object and get the length of the object to find the number of nodes in the graph
  let N = Object.keys(obj).length
  // create a 2D array of size N x N and fill it with 0s
  const matrix = Array.from({length:N},()=> Array(N).fill(0))
 for (let key of Object.keys(obj)){
    // get the neighbors of the node and set the corresponding values in the matrix to 1
    let neighbors = obj[key]
    for (let i =0;i < neighbors.length ; i++){
        // set the value in the matrix to 1 for the edge between the node and its neighbor  
      matrix[Number(key)][neighbors[i]] = 1
      
    }
  }
  for(let node of matrix){
    console.log(node)
    
  }
  return matrix
}