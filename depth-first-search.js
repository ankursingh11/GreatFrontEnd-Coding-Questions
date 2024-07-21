
// https://www.greatfrontend.com/questions/javascript/depth-first-search

/**
 * @param {Record<string, Array<string>} graph The adjacency list representing the graph.
 * @param {string} source The source node to start traversal from. It has to exist as a node in the graph.
 * @return {Array<string>} A DFS-traversed order of nodes.
 */

var dfs = (graph, visited, result, node) => {
  
  visited.set(node, true);
  result.push(node);

  for(let nbr of graph[node]){
    if(!visited.has(nbr)){
      dfs(graph, visited, result, nbr);
    }
  }
}

export default function depthFirstSearch(graph, source) {
  
  if(Object.keys(graph).length === 0 || source.length === 0) return [];

  const visited = new Map();
  visited.set(source, true);
  const result = [source];
  
  for(let nbr of graph[source]){
    if(!visited.has(nbr)){
      dfs(graph, visited, result, nbr);
    }
  }

  return result;
}