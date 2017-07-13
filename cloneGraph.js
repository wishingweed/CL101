/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
	var flag = {}
	  return traverse(graph);

	  function traverse(node){
      if(!node) return node;
      if(!flag[node.label]){
      flag[node.label] = new UndirectedGraphNode(node.label);
      flag[node.label].neighbors = node.neighbors.map(traverse);
       }
      return flag[node.label];
	}
};
